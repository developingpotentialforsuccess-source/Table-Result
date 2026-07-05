import { collection, doc, setDoc, getDocs, deleteDoc, onSnapshot, query, writeBatch } from 'firebase/firestore';
import { db, auth } from './firebase';
import { Level, ClassRecord, Student } from '../types';

export enum OperationType {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
  LIST = 'list',
  GET = 'get',
  WRITE = 'write',
}

interface FirestoreErrorInfo {
  error: string;
  operationType: OperationType;
  path: string | null;
  authInfo: {
    userId?: string | null;
    email?: string | null;
    emailVerified?: boolean | null;
    isAnonymous?: boolean | null;
    tenantId?: string | null;
    providerInfo?: {
      providerId?: string | null;
      email?: string | null;
    }[];
  }
}

export function handleFirestoreError(error: unknown, operationType: OperationType, path: string | null) {
  const errInfo: FirestoreErrorInfo = {
    error: error instanceof Error ? error.message : String(error),
    authInfo: {
      userId: auth.currentUser?.uid,
      email: auth.currentUser?.email,
      emailVerified: auth.currentUser?.emailVerified,
      isAnonymous: auth.currentUser?.isAnonymous,
      tenantId: auth.currentUser?.tenantId,
      providerInfo: auth.currentUser?.providerData?.map(provider => ({
        providerId: provider.providerId,
        email: provider.email,
      })) || []
    },
    operationType,
    path
  }
  console.error('Firestore Error: ', JSON.stringify(errInfo));
  throw new Error(JSON.stringify(errInfo));
}

export async function saveLevel(userId: string, level: Level) {
  const path = `users/${userId}/levels/${level.id}`;
  try {
    await setDoc(doc(db, 'users', userId, 'levels', level.id), level);
  } catch (error) {
    handleFirestoreError(error, OperationType.WRITE, path);
  }
}

export async function deleteLevel(userId: string, levelId: string) {
  const path = `users/${userId}/levels/${levelId}`;
  try {
    await deleteDoc(doc(db, 'users', userId, 'levels', levelId));
  } catch (error) {
    handleFirestoreError(error, OperationType.DELETE, path);
  }
}

export async function saveClassRecord(userId: string, classRecord: ClassRecord) {
  const path = `users/${userId}/classes/${classRecord.id}`;
  try {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { ...metadata } = classRecord;
    // @ts-ignore - explicitly removing students from the object if it exists
    delete metadata.students;
    await setDoc(doc(db, 'users', userId, 'classes', classRecord.id), metadata);
  } catch (error) {
    handleFirestoreError(error, OperationType.WRITE, path);
  }
}

export async function saveStudent(userId: string, classId: string, student: Student) {
  const path = `users/${userId}/classes/${classId}/students/${student.id}`;
  try {
    await setDoc(doc(db, 'users', userId, 'classes', classId, 'students', student.id), student);
  } catch (error) {
    handleFirestoreError(error, OperationType.WRITE, path);
  }
}

export async function saveStudentsBatch(userId: string, classId: string, students: Student[]) {
  const path = `users/${userId}/classes/${classId}/students (batch)`;
  try {
    const batch = writeBatch(db);
    students.forEach(student => {
      const studentRef = doc(db, 'users', userId, 'classes', classId, 'students', student.id);
      batch.set(studentRef, student);
    });
    await batch.commit();
  } catch (error) {
    handleFirestoreError(error, OperationType.WRITE, path);
  }
}

export async function deleteStudent(userId: string, classId: string, studentId: string) {
  const path = `users/${userId}/classes/${classId}/students/${studentId}`;
  try {
    await deleteDoc(doc(db, 'users', userId, 'classes', classId, 'students', studentId));
  } catch (error) {
    handleFirestoreError(error, OperationType.DELETE, path);
  }
}

export function subscribeToStudents(userId: string, classId: string, callback: (students: Student[]) => void) {
  const path = `users/${userId}/classes/${classId}/students`;
  const q = query(collection(db, 'users', userId, 'classes', classId, 'students'));
  return onSnapshot(q, (snapshot) => {
    const students = snapshot.docs.map(doc => doc.data() as Student);
    callback(students);
  }, (error) => {
    handleFirestoreError(error, OperationType.LIST, path);
  });
}

export async function deleteClassRecordRef(userId: string, classId: string) {
  const path = `users/${userId}/classes/${classId}`;
  try {
    await deleteDoc(doc(db, 'users', userId, 'classes', classId));
  } catch (error) {
    handleFirestoreError(error, OperationType.DELETE, path);
  }
}

export function subscribeToLevels(userId: string, callback: (levels: Level[]) => void) {
  const path = `users/${userId}/levels`;
  const q = query(collection(db, 'users', userId, 'levels'));
  return onSnapshot(q, (snapshot) => {
    const levels = snapshot.docs.map(doc => doc.data() as Level);
    callback(levels);
  }, (error) => {
    handleFirestoreError(error, OperationType.LIST, path);
  });
}

export function subscribeToClasses(userId: string, callback: (classes: ClassRecord[]) => void) {
  const path = `users/${userId}/classes`;
  const q = query(collection(db, 'users', userId, 'classes'));
  return onSnapshot(q, (snapshot) => {
    const classes = snapshot.docs.map(doc => doc.data() as ClassRecord);
    callback(classes);
  }, (error) => {
    handleFirestoreError(error, OperationType.LIST, path);
  });
}
