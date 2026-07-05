import { Subject, Level } from '../types';

export const SYSTEM_TEMPLATES = [

  {
    id: 'system-level-5a',
    name: 'Level 5A Template (Official)',
    authorName: 'System',
    levels: [
      {
        id: 'l5a',
        name: 'Level 5A',
        subjects: [
          {
            id: 's_reading_5a',
            name: 'Reading',
            targetWeight: 100,
            fullModeMidtermWeight: 100,
            fullModeFinalWeight: 100,
            categories: [
              { id: 'c_r_wq_5a', name: 'Weekly Quiz', weight: 4, midtermWeight: 0, finalWeight: 0, itemCount: 10, itemMaxScores: Array(10).fill(10) },
              { id: 'c_r_icq_5a', name: 'In-Class Quiz', weight: 4, midtermWeight: 0, finalWeight: 0, itemCount: 10, itemMaxScores: Array(10).fill(10) },
              { id: 'c_r_hw_5a', name: 'Homework', weight: 4, midtermWeight: 0, finalWeight: 0, itemCount: 1, itemMaxScores: [10] },
              { id: 'c_r_ra_5a', name: 'Reading Assignments', weight: 18, midtermWeight: 0, finalWeight: 0, itemCount: 2, itemMaxScores: [100, 100] },
              { id: 'c_r_att_5a', name: 'Attendance & Class Parti.', weight: 4, midtermWeight: 0, finalWeight: 0, itemCount: 1, itemMaxScores: [10] },
              { id: 'c_r_mid_5a', name: 'Midterm Test', weight: 26, midtermWeight: 100, finalWeight: 0, itemCount: 1, itemMaxScores: [100] },
              { id: 'c_r_fin_5a', name: 'Final Test', weight: 40, midtermWeight: 0, finalWeight: 100, itemCount: 1, itemMaxScores: [100] },
            ]
          },
          {
            id: 's_writing_5a',
            name: 'Writing',
            targetWeight: 100,
            fullModeMidtermWeight: 100,
            fullModeFinalWeight: 100,
            categories: [
              { id: 'c_w_wq_5a', name: 'Weekly Quiz', weight: 5, midtermWeight: 0, finalWeight: 0, itemCount: 10, itemMaxScores: Array(10).fill(10) },
              { id: 'c_w_icq_5a', name: 'In-Class Quiz', weight: 5, midtermWeight: 0, finalWeight: 0, itemCount: 10, itemMaxScores: Array(10).fill(10) },
              { id: 'c_w_wa1_5a', name: 'Writing Assignment 1', weight: 7.5, midtermWeight: 0, finalWeight: 0, itemCount: 1, itemMaxScores: [10] },
              { id: 'c_w_wa2_5a', name: 'Writing Assignment 2', weight: 7.5, midtermWeight: 0, finalWeight: 0, itemCount: 1, itemMaxScores: [10] },
              { id: 'c_w_hw_5a', name: 'Homework', weight: 5, midtermWeight: 0, finalWeight: 0, itemCount: 1, itemMaxScores: [10] },
              { id: 'c_w_att_5a', name: 'Att. & Class Part.', weight: 5, midtermWeight: 0, finalWeight: 0, itemCount: 1, itemMaxScores: [10] },
              { id: 'c_w_mid_5a', name: 'Midterm Test', weight: 25, midtermWeight: 100, finalWeight: 0, itemCount: 1, itemMaxScores: [100] },
              { id: 'c_w_fin_5a', name: 'Final Test', weight: 40, midtermWeight: 0, finalWeight: 100, itemCount: 1, itemMaxScores: [100] },
            ]
          },
          {
            id: 's_computer_5a',
            name: 'Computer',
            targetWeight: 100,
            fullModeMidtermWeight: 100,
            fullModeFinalWeight: 100,
            categories: [
              { id: 'c_c_att_5a', name: 'Attendance', weight: 5, midtermWeight: 0, finalWeight: 0, itemCount: 1, itemMaxScores: [10] },
              { id: 'c_c_cp_5a', name: 'Class Participation', weight: 5, midtermWeight: 0, finalWeight: 0, itemCount: 1, itemMaxScores: [10] },
              { id: 'c_c_mid_5a', name: 'Midterm Test', weight: 40, midtermWeight: 100, finalWeight: 0, itemCount: 1, itemMaxScores: [100] },
              { id: 'c_c_fin_5a', name: 'Final Test', weight: 50, midtermWeight: 0, finalWeight: 100, itemCount: 1, itemMaxScores: [100] },
            ]
          },
          {
            id: 's_listening_5a',
            name: 'Listening',
            targetWeight: 100,
            fullModeMidtermWeight: 100,
            fullModeFinalWeight: 100,
            categories: [
              { id: 'c_l_wq_5a', name: 'Weekly Quiz', weight: 5, midtermWeight: 0, finalWeight: 0, itemCount: 10, itemMaxScores: Array(10).fill(10) },
              { id: 'c_l_icq_5a', name: 'In-Class Quiz', weight: 5, midtermWeight: 0, finalWeight: 0, itemCount: 10, itemMaxScores: Array(10).fill(10) },
              { id: 'c_l_hw_5a', name: 'Homework', weight: 5, midtermWeight: 0, finalWeight: 0, itemCount: 1, itemMaxScores: [10] },
              { id: 'c_l_att_5a', name: 'Att. & Class Part.', weight: 5, midtermWeight: 0, finalWeight: 0, itemCount: 1, itemMaxScores: [10] },
              { id: 'c_l_mid_5a', name: 'Midterm Test', weight: 30, midtermWeight: 100, finalWeight: 0, itemCount: 1, itemMaxScores: [100] },
              { id: 'c_l_fin_5a', name: 'Final Test', weight: 50, midtermWeight: 0, finalWeight: 100, itemCount: 1, itemMaxScores: [100] },
            ]
          },
          {
            id: 's_speaking_5a',
            name: 'Speaking',
            targetWeight: 100,
            fullModeMidtermWeight: 100,
            fullModeFinalWeight: 100,
            categories: [
              { id: 'c_s_wq_5a', name: 'Weekly Quiz', weight: 5, midtermWeight: 0, finalWeight: 0, itemCount: 10, itemMaxScores: Array(10).fill(10) },
              { id: 'c_s_icq_5a', name: 'In-Class Quiz', weight: 5, midtermWeight: 0, finalWeight: 0, itemCount: 10, itemMaxScores: Array(10).fill(10) },
              { id: 'c_s_deb_5a', name: 'Debate', weight: 8, midtermWeight: 0, finalWeight: 0, itemCount: 1, itemMaxScores: [10] },
              { id: 'c_s_gp_5a', name: 'Group Presentation', weight: 7, midtermWeight: 0, finalWeight: 0, itemCount: 1, itemMaxScores: [10] },
              { id: 'c_s_hw_att_5a', name: 'Homework, Att. & Class Part.', weight: 5, midtermWeight: 0, finalWeight: 0, itemCount: 1, itemMaxScores: [10] },
              { id: 'c_s_mid_5a', name: 'Midterm Test', weight: 30, midtermWeight: 100, finalWeight: 0, itemCount: 1, itemMaxScores: [100] },
              { id: 'c_s_fin_5a', name: 'Final Test', weight: 40, midtermWeight: 0, finalWeight: 100, itemCount: 1, itemMaxScores: [100] },
            ]
          },
          {
            id: 's_grammar_5a',
            name: 'Grammar',
            targetWeight: 100,
            fullModeMidtermWeight: 100,
            fullModeFinalWeight: 100,
            categories: [
              { id: 'c_g_wq_5a', name: 'Weekly Quiz', weight: 5, midtermWeight: 0, finalWeight: 0, itemCount: 10, itemMaxScores: Array(10).fill(10) },
              { id: 'c_g_icq_5a', name: 'In-Class Quiz', weight: 5, midtermWeight: 0, finalWeight: 0, itemCount: 10, itemMaxScores: Array(10).fill(10) },
              { id: 'c_g_hw_5a', name: 'Homework', weight: 10, midtermWeight: 0, finalWeight: 0, itemCount: 1, itemMaxScores: [10] },
              { id: 'c_g_att_5a', name: 'Att. & Class Part.', weight: 5, midtermWeight: 0, finalWeight: 0, itemCount: 1, itemMaxScores: [10] },
              { id: 'c_g_mid_5a', name: 'Midterm Test', weight: 25, midtermWeight: 100, finalWeight: 0, itemCount: 1, itemMaxScores: [100] },
              { id: 'c_g_fin_5a', name: 'Final Test', weight: 50, midtermWeight: 0, finalWeight: 100, itemCount: 1, itemMaxScores: [100] },
            ]
          },
          {
            id: 's_science_5a',
            name: 'Science',
            targetWeight: 100,
            fullModeMidtermWeight: 100,
            fullModeFinalWeight: 100,
            categories: [
              { id: 'c_sc_qz_5a', name: 'Quiz', weight: 10, midtermWeight: 0, finalWeight: 0, itemCount: 10, itemMaxScores: Array(10).fill(10) },
              { id: 'c_sc_hw_5a', name: 'Homework', weight: 5, midtermWeight: 0, finalWeight: 0, itemCount: 1, itemMaxScores: [10] },
              { id: 'c_sc_att_5a', name: 'Att. & Class Part.', weight: 5, midtermWeight: 0, finalWeight: 0, itemCount: 1, itemMaxScores: [10] },
              { id: 'c_sc_mid_5a', name: 'Midterm Test', weight: 30, midtermWeight: 100, finalWeight: 0, itemCount: 1, itemMaxScores: [100] },
              { id: 'c_sc_fin_5a', name: 'Final Test', weight: 50, midtermWeight: 0, finalWeight: 100, itemCount: 1, itemMaxScores: [100] },
            ]
          }
        ],
        gradingScale: [
          { grade: 'A+', minScore: 95 },
          { grade: 'A', minScore: 90 },
          { grade: 'B', minScore: 80 },
          { grade: 'C', minScore: 70 },
          { grade: 'D', minScore: 60 },
          { grade: 'E', minScore: 50 },
          { grade: 'F', minScore: 0 }
        ],
        statusScale: [
          { grade: 'Pass', minScore: 70 },
          { grade: 'Fail', minScore: 0 }
        ]
      }
    ]
  },

  {
    id: 'system-level-5b',
    name: 'Level 5B Template (Official)',
    authorName: 'System',
    levels: [
      {
        id: 'l5b',
        name: 'Level 5B',
        subjects: [
          {
            id: 's_reading_5b',
            name: 'Reading',
            targetWeight: 100,
            fullModeMidtermWeight: 100,
            fullModeFinalWeight: 100,
            categories: [
              { id: 'c_r_wq_5b', name: 'Weekly Quiz', weight: 4, midtermWeight: 0, finalWeight: 0, itemCount: 10, itemMaxScores: Array(10).fill(10) },
              { id: 'c_r_icq_5b', name: 'In-Class Quiz', weight: 4, midtermWeight: 0, finalWeight: 0, itemCount: 10, itemMaxScores: Array(10).fill(10) },
              { id: 'c_r_hw_5b', name: 'Homework', weight: 4, midtermWeight: 0, finalWeight: 0, itemCount: 1, itemMaxScores: [10] },
              { id: 'c_r_ra_5b', name: 'Reading Assignments', weight: 18, midtermWeight: 0, finalWeight: 0, itemCount: 2, itemMaxScores: [100, 100] },
              { id: 'c_r_att_5b', name: 'Attendance & Class Parti.', weight: 4, midtermWeight: 0, finalWeight: 0, itemCount: 1, itemMaxScores: [10] },
              { id: 'c_r_mid_5b', name: 'Midterm Test', weight: 26, midtermWeight: 100, finalWeight: 0, itemCount: 1, itemMaxScores: [100] },
              { id: 'c_r_fin_5b', name: 'Final Test', weight: 40, midtermWeight: 0, finalWeight: 100, itemCount: 1, itemMaxScores: [100] },
            ]
          },
          {
            id: 's_writing_5b',
            name: 'Writing',
            targetWeight: 100,
            fullModeMidtermWeight: 100,
            fullModeFinalWeight: 100,
            categories: [
              { id: 'c_w_wq_5b', name: 'Weekly Quiz', weight: 5, midtermWeight: 0, finalWeight: 0, itemCount: 10, itemMaxScores: Array(10).fill(10) },
              { id: 'c_w_icq_5b', name: 'In-Class Quiz', weight: 5, midtermWeight: 0, finalWeight: 0, itemCount: 10, itemMaxScores: Array(10).fill(10) },
              { id: 'c_w_wa1_5b', name: 'Writing Assignment 1', weight: 7.5, midtermWeight: 0, finalWeight: 0, itemCount: 1, itemMaxScores: [10] },
              { id: 'c_w_wa2_5b', name: 'Writing Assignment 2', weight: 7.5, midtermWeight: 0, finalWeight: 0, itemCount: 1, itemMaxScores: [10] },
              { id: 'c_w_hw_5b', name: 'Homework', weight: 5, midtermWeight: 0, finalWeight: 0, itemCount: 1, itemMaxScores: [10] },
              { id: 'c_w_att_5b', name: 'Att. & Class Part.', weight: 5, midtermWeight: 0, finalWeight: 0, itemCount: 1, itemMaxScores: [10] },
              { id: 'c_w_mid_5b', name: 'Midterm Test', weight: 25, midtermWeight: 100, finalWeight: 0, itemCount: 1, itemMaxScores: [100] },
              { id: 'c_w_fin_5b', name: 'Final Test', weight: 40, midtermWeight: 0, finalWeight: 100, itemCount: 1, itemMaxScores: [100] },
            ]
          },
          {
            id: 's_computer_5b',
            name: 'Computer',
            targetWeight: 100,
            fullModeMidtermWeight: 100,
            fullModeFinalWeight: 100,
            categories: [
              { id: 'c_c_att_5b', name: 'Attendance', weight: 5, midtermWeight: 0, finalWeight: 0, itemCount: 1, itemMaxScores: [10] },
              { id: 'c_c_cp_5b', name: 'Class Participation', weight: 5, midtermWeight: 0, finalWeight: 0, itemCount: 1, itemMaxScores: [10] },
              { id: 'c_c_mid_5b', name: 'Midterm Test', weight: 40, midtermWeight: 100, finalWeight: 0, itemCount: 1, itemMaxScores: [100] },
              { id: 'c_c_fin_5b', name: 'Final Test', weight: 50, midtermWeight: 0, finalWeight: 100, itemCount: 1, itemMaxScores: [100] },
            ]
          },
          {
            id: 's_listening_5b',
            name: 'Listening',
            targetWeight: 100,
            fullModeMidtermWeight: 100,
            fullModeFinalWeight: 100,
            categories: [
              { id: 'c_l_wq_5b', name: 'Weekly Quiz', weight: 5, midtermWeight: 0, finalWeight: 0, itemCount: 10, itemMaxScores: Array(10).fill(10) },
              { id: 'c_l_icq_5b', name: 'In-Class Quiz', weight: 5, midtermWeight: 0, finalWeight: 0, itemCount: 10, itemMaxScores: Array(10).fill(10) },
              { id: 'c_l_hw_5b', name: 'Homework', weight: 5, midtermWeight: 0, finalWeight: 0, itemCount: 1, itemMaxScores: [10] },
              { id: 'c_l_att_5b', name: 'Att. & Class Part.', weight: 5, midtermWeight: 0, finalWeight: 0, itemCount: 1, itemMaxScores: [10] },
              { id: 'c_l_mid_5b', name: 'Midterm Test', weight: 30, midtermWeight: 100, finalWeight: 0, itemCount: 1, itemMaxScores: [100] },
              { id: 'c_l_fin_5b', name: 'Final Test', weight: 50, midtermWeight: 0, finalWeight: 100, itemCount: 1, itemMaxScores: [100] },
            ]
          },
          {
            id: 's_speaking_5b',
            name: 'Speaking',
            targetWeight: 100,
            fullModeMidtermWeight: 100,
            fullModeFinalWeight: 100,
            categories: [
              { id: 'c_s_wq_5b', name: 'Weekly Quiz', weight: 5, midtermWeight: 0, finalWeight: 0, itemCount: 10, itemMaxScores: Array(10).fill(10) },
              { id: 'c_s_icq_5b', name: 'In-Class Quiz', weight: 5, midtermWeight: 0, finalWeight: 0, itemCount: 10, itemMaxScores: Array(10).fill(10) },
              { id: 'c_s_deb_5b', name: 'Debate', weight: 15, midtermWeight: 0, finalWeight: 0, itemCount: 1, itemMaxScores: [10] },
              { id: 'c_s_hw_att_5b', name: 'Homework, Att. & Class Part.', weight: 5, midtermWeight: 0, finalWeight: 0, itemCount: 1, itemMaxScores: [10] },
              { id: 'c_s_mid_5b', name: 'Midterm Test', weight: 30, midtermWeight: 100, finalWeight: 0, itemCount: 1, itemMaxScores: [100] },
              { id: 'c_s_fin_5b', name: 'Final Test', weight: 40, midtermWeight: 0, finalWeight: 100, itemCount: 1, itemMaxScores: [100] },
            ]
          },
          {
            id: 's_grammar_5b',
            name: 'Grammar',
            targetWeight: 100,
            fullModeMidtermWeight: 100,
            fullModeFinalWeight: 100,
            categories: [
              { id: 'c_g_wq_5b', name: 'Weekly Quiz', weight: 5, midtermWeight: 0, finalWeight: 0, itemCount: 10, itemMaxScores: Array(10).fill(10) },
              { id: 'c_g_icq_5b', name: 'In-Class Quiz', weight: 5, midtermWeight: 0, finalWeight: 0, itemCount: 10, itemMaxScores: Array(10).fill(10) },
              { id: 'c_g_hw_5b', name: 'Homework', weight: 10, midtermWeight: 0, finalWeight: 0, itemCount: 1, itemMaxScores: [10] },
              { id: 'c_g_att_5b', name: 'Att. & Class Part.', weight: 5, midtermWeight: 0, finalWeight: 0, itemCount: 1, itemMaxScores: [10] },
              { id: 'c_g_mid_5b', name: 'Midterm Test', weight: 25, midtermWeight: 100, finalWeight: 0, itemCount: 1, itemMaxScores: [100] },
              { id: 'c_g_fin_5b', name: 'Final Test', weight: 50, midtermWeight: 0, finalWeight: 100, itemCount: 1, itemMaxScores: [100] },
            ]
          },
          {
            id: 's_math_5b',
            name: 'Mathematics',
            targetWeight: 100,
            fullModeMidtermWeight: 100,
            fullModeFinalWeight: 100,
            categories: [
              { id: 'c_m_qz_5b', name: 'Quiz', weight: 10, midtermWeight: 0, finalWeight: 0, itemCount: 10, itemMaxScores: Array(10).fill(10) },
              { id: 'c_m_hw_5b', name: 'Homework', weight: 5, midtermWeight: 0, finalWeight: 0, itemCount: 1, itemMaxScores: [10] },
              { id: 'c_m_att_5b', name: 'Att. & Class Part.', weight: 5, midtermWeight: 0, finalWeight: 0, itemCount: 1, itemMaxScores: [10] },
              { id: 'c_m_mid_5b', name: 'Midterm Test', weight: 30, midtermWeight: 100, finalWeight: 0, itemCount: 1, itemMaxScores: [100] },
              { id: 'c_m_fin_5b', name: 'Final Test', weight: 50, midtermWeight: 0, finalWeight: 100, itemCount: 1, itemMaxScores: [100] },
            ]
          }
        ],
        gradingScale: [
          { grade: 'A+', minScore: 95 },
          { grade: 'A', minScore: 90 },
          { grade: 'B', minScore: 80 },
          { grade: 'C', minScore: 70 },
          { grade: 'D', minScore: 60 },
          { grade: 'E', minScore: 50 },
          { grade: 'F', minScore: 0 }
        ],
        statusScale: [
          { grade: 'Pass', minScore: 70 },
          { grade: 'Fail', minScore: 0 }
        ]
      }
    ]
  },


  {
    id: 'system-level-4a',
    name: 'Level 4A Template (Official)',
    authorName: 'System',
    levels: [
      {
        id: 'l4a',
        name: 'Level 4A',
        subjects: [
          {
            id: 's_reading_4a',
            name: 'Reading',
            targetWeight: 100,
            fullModeMidtermWeight: 100,
            fullModeFinalWeight: 100,
            categories: [
              { id: 'c_r_wq_4a', name: 'Weekly Quiz', weight: 4, midtermWeight: 0, finalWeight: 0, itemCount: 10, itemMaxScores: Array(10).fill(10) },
              { id: 'c_r_icq_4a', name: 'In-Class Quiz', weight: 4, midtermWeight: 0, finalWeight: 0, itemCount: 10, itemMaxScores: Array(10).fill(10) },
              { id: 'c_r_hw_4a', name: 'Homework', weight: 4, midtermWeight: 0, finalWeight: 0, itemCount: 1, itemMaxScores: [10] },
              { id: 'c_r_ra_4a', name: 'Reading Assignments', weight: 18, midtermWeight: 0, finalWeight: 0, itemCount: 2, itemMaxScores: [100, 100] },
              { id: 'c_r_att_4a', name: 'Attendance & Class Parti.', weight: 4, midtermWeight: 0, finalWeight: 0, itemCount: 1, itemMaxScores: [10] },
              { id: 'c_r_mid_4a', name: 'Midterm Test', weight: 26, midtermWeight: 100, finalWeight: 0, itemCount: 1, itemMaxScores: [100] },
              { id: 'c_r_fin_4a', name: 'Final Test', weight: 40, midtermWeight: 0, finalWeight: 100, itemCount: 1, itemMaxScores: [100] },
            ]
          },
          {
            id: 's_writing_4a',
            name: 'Writing',
            targetWeight: 100,
            fullModeMidtermWeight: 100,
            fullModeFinalWeight: 100,
            categories: [
              { id: 'c_w_wq_4a', name: 'Weekly Quiz', weight: 5, midtermWeight: 0, finalWeight: 0, itemCount: 10, itemMaxScores: Array(10).fill(10) },
              { id: 'c_w_icq_4a', name: 'In-Class Quiz', weight: 5, midtermWeight: 0, finalWeight: 0, itemCount: 10, itemMaxScores: Array(10).fill(10) },
              { id: 'c_w_wa1_4a', name: 'Writing Assignment 1', weight: 7.5, midtermWeight: 0, finalWeight: 0, itemCount: 1, itemMaxScores: [10] },
              { id: 'c_w_wa2_4a', name: 'Writing Assignment 2', weight: 7.5, midtermWeight: 0, finalWeight: 0, itemCount: 1, itemMaxScores: [10] },
              { id: 'c_w_hw_4a', name: 'Homework', weight: 5, midtermWeight: 0, finalWeight: 0, itemCount: 1, itemMaxScores: [10] },
              { id: 'c_w_att_4a', name: 'Att. & Class Part.', weight: 5, midtermWeight: 0, finalWeight: 0, itemCount: 1, itemMaxScores: [10] },
              { id: 'c_w_mid_4a', name: 'Midterm Test', weight: 25, midtermWeight: 100, finalWeight: 0, itemCount: 1, itemMaxScores: [100] },
              { id: 'c_w_fin_4a', name: 'Final Test', weight: 40, midtermWeight: 0, finalWeight: 100, itemCount: 1, itemMaxScores: [100] },
            ]
          },
          {
            id: 's_computer_4a',
            name: 'Computer',
            targetWeight: 100,
            fullModeMidtermWeight: 100,
            fullModeFinalWeight: 100,
            categories: [
              { id: 'c_c_att_4a', name: 'Attendance', weight: 5, midtermWeight: 0, finalWeight: 0, itemCount: 1, itemMaxScores: [10] },
              { id: 'c_c_cp_4a', name: 'Class Participation', weight: 5, midtermWeight: 0, finalWeight: 0, itemCount: 1, itemMaxScores: [10] },
              { id: 'c_c_mid_4a', name: 'Midterm Test', weight: 40, midtermWeight: 100, finalWeight: 0, itemCount: 1, itemMaxScores: [100] },
              { id: 'c_c_fin_4a', name: 'Final Test', weight: 50, midtermWeight: 0, finalWeight: 100, itemCount: 1, itemMaxScores: [100] },
            ]
          },
          {
            id: 's_phonetic_4a',
            name: 'Phonetic Symbols',
            targetWeight: 100,
            fullModeMidtermWeight: 100,
            fullModeFinalWeight: 100,
            categories: [
              { id: 'c_p_qz_4a', name: 'Quiz', weight: 10, midtermWeight: 0, finalWeight: 0, itemCount: 10, itemMaxScores: Array(10).fill(10) },
              { id: 'c_p_hw_4a', name: 'Homework', weight: 5, midtermWeight: 0, finalWeight: 0, itemCount: 1, itemMaxScores: [10] },
              { id: 'c_p_att_4a', name: 'Att. & Class Part.', weight: 5, midtermWeight: 0, finalWeight: 0, itemCount: 1, itemMaxScores: [10] },
              { id: 'c_p_mid_4a', name: 'Midterm Test', weight: 30, midtermWeight: 100, finalWeight: 0, itemCount: 1, itemMaxScores: [100] },
              { id: 'c_p_fin_4a', name: 'Final Test', weight: 50, midtermWeight: 0, finalWeight: 100, itemCount: 1, itemMaxScores: [100] },
            ]
          },
          {
            id: 's_listening_4a',
            name: 'Listening',
            targetWeight: 100,
            fullModeMidtermWeight: 100,
            fullModeFinalWeight: 100,
            categories: [
              { id: 'c_l_wq_4a', name: 'Weekly Quiz', weight: 5, midtermWeight: 0, finalWeight: 0, itemCount: 10, itemMaxScores: Array(10).fill(10) },
              { id: 'c_l_icq_4a', name: 'In-Class Quiz', weight: 5, midtermWeight: 0, finalWeight: 0, itemCount: 10, itemMaxScores: Array(10).fill(10) },
              { id: 'c_l_hw_4a', name: 'Homework', weight: 5, midtermWeight: 0, finalWeight: 0, itemCount: 1, itemMaxScores: [10] },
              { id: 'c_l_att_4a', name: 'Att. & Class Part.', weight: 5, midtermWeight: 0, finalWeight: 0, itemCount: 1, itemMaxScores: [10] },
              { id: 'c_l_mid_4a', name: 'Midterm Test', weight: 30, midtermWeight: 100, finalWeight: 0, itemCount: 1, itemMaxScores: [100] },
              { id: 'c_l_fin_4a', name: 'Final Test', weight: 50, midtermWeight: 0, finalWeight: 100, itemCount: 1, itemMaxScores: [100] },
            ]
          },
          {
            id: 's_speaking_4a',
            name: 'Speaking',
            targetWeight: 100,
            fullModeMidtermWeight: 100,
            fullModeFinalWeight: 100,
            categories: [
              { id: 'c_s_wq_4a', name: 'Weekly Quiz', weight: 5, midtermWeight: 0, finalWeight: 0, itemCount: 10, itemMaxScores: Array(10).fill(10) },
              { id: 'c_s_icq_4a', name: 'In-Class Quiz', weight: 5, midtermWeight: 0, finalWeight: 0, itemCount: 10, itemMaxScores: Array(10).fill(10) },
              { id: 'c_s_gp_4a', name: 'Group Presentation', weight: 8, midtermWeight: 0, finalWeight: 0, itemCount: 1, itemMaxScores: [10] },
              { id: 'c_s_rp_4a', name: 'Roleplay', weight: 7, midtermWeight: 0, finalWeight: 0, itemCount: 1, itemMaxScores: [10] },
              { id: 'c_s_hw_att_4a', name: 'Homework, Att. & Class Part.', weight: 5, midtermWeight: 0, finalWeight: 0, itemCount: 1, itemMaxScores: [10] },
              { id: 'c_s_mid_4a', name: 'Midterm Test', weight: 30, midtermWeight: 100, finalWeight: 0, itemCount: 1, itemMaxScores: [100] },
              { id: 'c_s_fin_4a', name: 'Final Test', weight: 40, midtermWeight: 0, finalWeight: 100, itemCount: 1, itemMaxScores: [100] },
            ]
          },
          {
            id: 's_grammar_4a',
            name: 'Grammar',
            targetWeight: 100,
            fullModeMidtermWeight: 100,
            fullModeFinalWeight: 100,
            categories: [
              { id: 'c_g_wq_4a', name: 'Weekly Quiz', weight: 5, midtermWeight: 0, finalWeight: 0, itemCount: 10, itemMaxScores: Array(10).fill(10) },
              { id: 'c_g_icq_4a', name: 'In-Class Quiz', weight: 5, midtermWeight: 0, finalWeight: 0, itemCount: 10, itemMaxScores: Array(10).fill(10) },
              { id: 'c_g_hw_4a', name: 'Homework', weight: 10, midtermWeight: 0, finalWeight: 0, itemCount: 1, itemMaxScores: [10] },
              { id: 'c_g_att_4a', name: 'Att. & Class Part.', weight: 5, midtermWeight: 0, finalWeight: 0, itemCount: 1, itemMaxScores: [10] },
              { id: 'c_g_mid_4a', name: 'Midterm Test', weight: 25, midtermWeight: 100, finalWeight: 0, itemCount: 1, itemMaxScores: [100] },
              { id: 'c_g_fin_4a', name: 'Final Test', weight: 50, midtermWeight: 0, finalWeight: 100, itemCount: 1, itemMaxScores: [100] },
            ]
          },
          {
            id: 's_math_4a',
            name: 'Mathematics',
            targetWeight: 100,
            fullModeMidtermWeight: 100,
            fullModeFinalWeight: 100,
            categories: [
              { id: 'c_m_qz_4a', name: 'Quiz', weight: 10, midtermWeight: 0, finalWeight: 0, itemCount: 10, itemMaxScores: Array(10).fill(10) },
              { id: 'c_m_hw_4a', name: 'Homework', weight: 5, midtermWeight: 0, finalWeight: 0, itemCount: 1, itemMaxScores: [10] },
              { id: 'c_m_att_4a', name: 'Att. & Class Part.', weight: 5, midtermWeight: 0, finalWeight: 0, itemCount: 1, itemMaxScores: [10] },
              { id: 'c_m_mid_4a', name: 'Midterm Test', weight: 30, midtermWeight: 100, finalWeight: 0, itemCount: 1, itemMaxScores: [100] },
              { id: 'c_m_fin_4a', name: 'Final Test', weight: 50, midtermWeight: 0, finalWeight: 100, itemCount: 1, itemMaxScores: [100] },
            ]
          }
        ],
        gradingScale: [
          { grade: 'A+', minScore: 95 },
          { grade: 'A', minScore: 90 },
          { grade: 'B', minScore: 80 },
          { grade: 'C', minScore: 70 },
          { grade: 'D', minScore: 60 },
          { grade: 'E', minScore: 50 },
          { grade: 'F', minScore: 0 }
        ],
        statusScale: [
          { grade: 'Pass', minScore: 70 },
          { grade: 'Fail', minScore: 0 }
        ]
      }
    ]
  },

  {
    id: 'system-level-4b',
    name: 'Level 4B Template (Official)',
    authorName: 'System',
    levels: [
      {
        id: 'l4b',
        name: 'Level 4B',
        subjects: [
          {
            id: 's_reading_4b',
            name: 'Reading',
            targetWeight: 100,
            fullModeMidtermWeight: 100,
            fullModeFinalWeight: 100,
            categories: [
              { id: 'c_r_wq_4b', name: 'Weekly Quiz', weight: 4, midtermWeight: 0, finalWeight: 0, itemCount: 10, itemMaxScores: Array(10).fill(10) },
              { id: 'c_r_icq_4b', name: 'In-Class Quiz', weight: 4, midtermWeight: 0, finalWeight: 0, itemCount: 10, itemMaxScores: Array(10).fill(10) },
              { id: 'c_r_hw_4b', name: 'Homework', weight: 4, midtermWeight: 0, finalWeight: 0, itemCount: 1, itemMaxScores: [10] },
              { id: 'c_r_ra_4b', name: 'Reading Assignments', weight: 18, midtermWeight: 0, finalWeight: 0, itemCount: 2, itemMaxScores: [100, 100] },
              { id: 'c_r_att_4b', name: 'Attendance & Class Parti.', weight: 4, midtermWeight: 0, finalWeight: 0, itemCount: 1, itemMaxScores: [10] },
              { id: 'c_r_mid_4b', name: 'Midterm Test', weight: 26, midtermWeight: 100, finalWeight: 0, itemCount: 1, itemMaxScores: [100] },
              { id: 'c_r_fin_4b', name: 'Final Test', weight: 40, midtermWeight: 0, finalWeight: 100, itemCount: 1, itemMaxScores: [100] },
            ]
          },
          {
            id: 's_writing_4b',
            name: 'Writing',
            targetWeight: 100,
            fullModeMidtermWeight: 100,
            fullModeFinalWeight: 100,
            categories: [
              { id: 'c_w_wq_4b', name: 'Weekly Quiz', weight: 5, midtermWeight: 0, finalWeight: 0, itemCount: 10, itemMaxScores: Array(10).fill(10) },
              { id: 'c_w_icq_4b', name: 'In-Class Quiz', weight: 5, midtermWeight: 0, finalWeight: 0, itemCount: 10, itemMaxScores: Array(10).fill(10) },
              { id: 'c_w_wa1_4b', name: 'Writing Assignment 1', weight: 7.5, midtermWeight: 0, finalWeight: 0, itemCount: 1, itemMaxScores: [10] },
              { id: 'c_w_wa2_4b', name: 'Writing Assignment 2', weight: 7.5, midtermWeight: 0, finalWeight: 0, itemCount: 1, itemMaxScores: [10] },
              { id: 'c_w_hw_4b', name: 'Homework', weight: 5, midtermWeight: 0, finalWeight: 0, itemCount: 1, itemMaxScores: [10] },
              { id: 'c_w_att_4b', name: 'Att. & Class Part.', weight: 5, midtermWeight: 0, finalWeight: 0, itemCount: 1, itemMaxScores: [10] },
              { id: 'c_w_mid_4b', name: 'Midterm Test', weight: 25, midtermWeight: 100, finalWeight: 0, itemCount: 1, itemMaxScores: [100] },
              { id: 'c_w_fin_4b', name: 'Final Test', weight: 40, midtermWeight: 0, finalWeight: 100, itemCount: 1, itemMaxScores: [100] },
            ]
          },
          {
            id: 's_computer_4b',
            name: 'Computer',
            targetWeight: 100,
            fullModeMidtermWeight: 100,
            fullModeFinalWeight: 100,
            categories: [
              { id: 'c_c_att_4b', name: 'Attendance', weight: 5, midtermWeight: 0, finalWeight: 0, itemCount: 1, itemMaxScores: [10] },
              { id: 'c_c_cp_4b', name: 'Class Participation', weight: 5, midtermWeight: 0, finalWeight: 0, itemCount: 1, itemMaxScores: [10] },
              { id: 'c_c_mid_4b', name: 'Midterm Test', weight: 40, midtermWeight: 100, finalWeight: 0, itemCount: 1, itemMaxScores: [100] },
              { id: 'c_c_fin_4b', name: 'Final Test', weight: 50, midtermWeight: 0, finalWeight: 100, itemCount: 1, itemMaxScores: [100] },
            ]
          },
          {
            id: 's_phonetic_4b',
            name: 'Phonetic Symbols',
            targetWeight: 100,
            fullModeMidtermWeight: 100,
            fullModeFinalWeight: 100,
            categories: [
              { id: 'c_p_qz_4b', name: 'Quiz', weight: 10, midtermWeight: 0, finalWeight: 0, itemCount: 10, itemMaxScores: Array(10).fill(10) },
              { id: 'c_p_hw_4b', name: 'Homework', weight: 5, midtermWeight: 0, finalWeight: 0, itemCount: 1, itemMaxScores: [10] },
              { id: 'c_p_att_4b', name: 'Att. & Class Part.', weight: 5, midtermWeight: 0, finalWeight: 0, itemCount: 1, itemMaxScores: [10] },
              { id: 'c_p_mid_4b', name: 'Midterm Test', weight: 30, midtermWeight: 100, finalWeight: 0, itemCount: 1, itemMaxScores: [100] },
              { id: 'c_p_fin_4b', name: 'Final Test', weight: 50, midtermWeight: 0, finalWeight: 100, itemCount: 1, itemMaxScores: [100] },
            ]
          },
          {
            id: 's_listening_4b',
            name: 'Listening',
            targetWeight: 100,
            fullModeMidtermWeight: 100,
            fullModeFinalWeight: 100,
            categories: [
              { id: 'c_l_wq_4b', name: 'Weekly Quiz', weight: 5, midtermWeight: 0, finalWeight: 0, itemCount: 10, itemMaxScores: Array(10).fill(10) },
              { id: 'c_l_icq_4b', name: 'In-Class Quiz', weight: 5, midtermWeight: 0, finalWeight: 0, itemCount: 10, itemMaxScores: Array(10).fill(10) },
              { id: 'c_l_hw_4b', name: 'Homework', weight: 5, midtermWeight: 0, finalWeight: 0, itemCount: 1, itemMaxScores: [10] },
              { id: 'c_l_att_4b', name: 'Att. & Class Part.', weight: 5, midtermWeight: 0, finalWeight: 0, itemCount: 1, itemMaxScores: [10] },
              { id: 'c_l_mid_4b', name: 'Midterm Test', weight: 30, midtermWeight: 100, finalWeight: 0, itemCount: 1, itemMaxScores: [100] },
              { id: 'c_l_fin_4b', name: 'Final Test', weight: 50, midtermWeight: 0, finalWeight: 100, itemCount: 1, itemMaxScores: [100] },
            ]
          },
          {
            id: 's_speaking_4b',
            name: 'Speaking',
            targetWeight: 100,
            fullModeMidtermWeight: 100,
            fullModeFinalWeight: 100,
            categories: [
              { id: 'c_s_wq_4b', name: 'Weekly Quiz', weight: 5, midtermWeight: 0, finalWeight: 0, itemCount: 10, itemMaxScores: Array(10).fill(10) },
              { id: 'c_s_icq_4b', name: 'In-Class Quiz', weight: 5, midtermWeight: 0, finalWeight: 0, itemCount: 10, itemMaxScores: Array(10).fill(10) },
              { id: 'c_s_gp_4b', name: 'Group Presentation', weight: 8, midtermWeight: 0, finalWeight: 0, itemCount: 1, itemMaxScores: [10] },
              { id: 'c_s_rp_4b', name: 'Roleplay', weight: 7, midtermWeight: 0, finalWeight: 0, itemCount: 1, itemMaxScores: [10] },
              { id: 'c_s_hw_att_4b', name: 'Homework, Att. & Class Part.', weight: 5, midtermWeight: 0, finalWeight: 0, itemCount: 1, itemMaxScores: [10] },
              { id: 'c_s_mid_4b', name: 'Midterm Test', weight: 30, midtermWeight: 100, finalWeight: 0, itemCount: 1, itemMaxScores: [100] },
              { id: 'c_s_fin_4b', name: 'Final Test', weight: 40, midtermWeight: 0, finalWeight: 100, itemCount: 1, itemMaxScores: [100] },
            ]
          },
          {
            id: 's_grammar_4b',
            name: 'Grammar',
            targetWeight: 100,
            fullModeMidtermWeight: 100,
            fullModeFinalWeight: 100,
            categories: [
              { id: 'c_g_wq_4b', name: 'Weekly Quiz', weight: 5, midtermWeight: 0, finalWeight: 0, itemCount: 10, itemMaxScores: Array(10).fill(10) },
              { id: 'c_g_icq_4b', name: 'In-Class Quiz', weight: 5, midtermWeight: 0, finalWeight: 0, itemCount: 10, itemMaxScores: Array(10).fill(10) },
              { id: 'c_g_hw_4b', name: 'Homework', weight: 10, midtermWeight: 0, finalWeight: 0, itemCount: 1, itemMaxScores: [10] },
              { id: 'c_g_att_4b', name: 'Att. & Class Part.', weight: 5, midtermWeight: 0, finalWeight: 0, itemCount: 1, itemMaxScores: [10] },
              { id: 'c_g_mid_4b', name: 'Midterm Test', weight: 25, midtermWeight: 100, finalWeight: 0, itemCount: 1, itemMaxScores: [100] },
              { id: 'c_g_fin_4b', name: 'Final Test', weight: 50, midtermWeight: 0, finalWeight: 100, itemCount: 1, itemMaxScores: [100] },
            ]
          },
          {
            id: 's_science_4b',
            name: 'Science',
            targetWeight: 100,
            fullModeMidtermWeight: 100,
            fullModeFinalWeight: 100,
            categories: [
              { id: 'c_sc_qz_4b', name: 'Quiz', weight: 10, midtermWeight: 0, finalWeight: 0, itemCount: 10, itemMaxScores: Array(10).fill(10) },
              { id: 'c_sc_hw_4b', name: 'Homework', weight: 5, midtermWeight: 0, finalWeight: 0, itemCount: 1, itemMaxScores: [10] },
              { id: 'c_sc_att_4b', name: 'Att. & Class Part.', weight: 5, midtermWeight: 0, finalWeight: 0, itemCount: 1, itemMaxScores: [10] },
              { id: 'c_sc_mid_4b', name: 'Midterm Test', weight: 30, midtermWeight: 100, finalWeight: 0, itemCount: 1, itemMaxScores: [100] },
              { id: 'c_sc_fin_4b', name: 'Final Test', weight: 50, midtermWeight: 0, finalWeight: 100, itemCount: 1, itemMaxScores: [100] },
            ]
          }
        ],
        gradingScale: [
          { grade: 'A+', minScore: 95 },
          { grade: 'A', minScore: 90 },
          { grade: 'B', minScore: 80 },
          { grade: 'C', minScore: 70 },
          { grade: 'D', minScore: 60 },
          { grade: 'E', minScore: 50 },
          { grade: 'F', minScore: 0 }
        ],
        statusScale: [
          { grade: 'Pass', minScore: 70 },
          { grade: 'Fail', minScore: 0 }
        ]
      }
    ]
  },


  {
    id: 'system-level-3a',
    name: 'Level 3A Template (Official)',
    authorName: 'System',
    levels: [
      {
        id: 'l3a',
        name: 'Level 3A',
        subjects: [
          {
            id: 's_reading_3a',
            name: 'Reading',
            targetWeight: 100,
            fullModeMidtermWeight: 100,
            fullModeFinalWeight: 100,
            categories: [
              { id: 'c_r_wq_3a', name: 'Weekly Quiz', weight: 4, midtermWeight: 0, finalWeight: 0, itemCount: 10, itemMaxScores: Array(10).fill(10) },
              { id: 'c_r_icq_3a', name: 'In-Class Quiz', weight: 5, midtermWeight: 0, finalWeight: 0, itemCount: 10, itemMaxScores: Array(10).fill(10) },
              { id: 'c_r_hw_3a', name: 'Homework', weight: 5, midtermWeight: 0, finalWeight: 0, itemCount: 1, itemMaxScores: [10] },
              { id: 'c_r_ra_3a', name: 'Reading Assignments', weight: 16, midtermWeight: 0, finalWeight: 0, itemCount: 2, itemMaxScores: [100, 60] },
              { id: 'c_r_att_3a', name: 'Attendance & Class Parti.', weight: 5, midtermWeight: 0, finalWeight: 0, itemCount: 1, itemMaxScores: [10] },
              { id: 'c_r_mid_3a', name: 'Midterm Test', weight: 25, midtermWeight: 100, finalWeight: 0, itemCount: 1, itemMaxScores: [100] },
              { id: 'c_r_fin_3a', name: 'Final Test', weight: 40, midtermWeight: 0, finalWeight: 100, itemCount: 1, itemMaxScores: [100] },
            ]
          },
          {
            id: 's_writing_3a',
            name: 'Writing',
            targetWeight: 100,
            fullModeMidtermWeight: 100,
            fullModeFinalWeight: 100,
            categories: [
              { id: 'c_w_wq_3a', name: 'Weekly Quiz', weight: 5, midtermWeight: 0, finalWeight: 0, itemCount: 10, itemMaxScores: Array(10).fill(10) },
              { id: 'c_w_icq_3a', name: 'In-Class Quiz', weight: 5, midtermWeight: 0, finalWeight: 0, itemCount: 10, itemMaxScores: Array(10).fill(10) },
              { id: 'c_w_jw_3a', name: 'Journal Writing', weight: 5, midtermWeight: 0, finalWeight: 0, itemCount: 1, itemMaxScores: [10] },
              { id: 'c_w_omd_3a', name: 'One-Month Diary', weight: 5, midtermWeight: 0, finalWeight: 0, itemCount: 1, itemMaxScores: [10] },
              { id: 'c_w_wa_3a', name: 'Writing Assignment', weight: 10, midtermWeight: 0, finalWeight: 0, itemCount: 1, itemMaxScores: [10] },
              { id: 'c_w_hw_att_3a', name: 'Homework, Att. & Class Part.', weight: 5, midtermWeight: 0, finalWeight: 0, itemCount: 1, itemMaxScores: [10] },
              { id: 'c_w_mid_3a', name: 'Midterm Test', weight: 25, midtermWeight: 100, finalWeight: 0, itemCount: 1, itemMaxScores: [100] },
              { id: 'c_w_fin_3a', name: 'Final Test', weight: 40, midtermWeight: 0, finalWeight: 100, itemCount: 1, itemMaxScores: [100] },
            ]
          },
          {
            id: 's_computer_3a',
            name: 'Computer',
            targetWeight: 100,
            fullModeMidtermWeight: 100,
            fullModeFinalWeight: 100,
            categories: [
              { id: 'c_c_att_3a', name: 'Attendance', weight: 5, midtermWeight: 0, finalWeight: 0, itemCount: 1, itemMaxScores: [10] },
              { id: 'c_c_cp_3a', name: 'Class Participation', weight: 5, midtermWeight: 0, finalWeight: 0, itemCount: 1, itemMaxScores: [10] },
              { id: 'c_c_mid_3a', name: 'Midterm Test', weight: 40, midtermWeight: 100, finalWeight: 0, itemCount: 1, itemMaxScores: [100] },
              { id: 'c_c_fin_3a', name: 'Final Test', weight: 50, midtermWeight: 0, finalWeight: 100, itemCount: 1, itemMaxScores: [100] },
            ]
          },
          {
            id: 's_listening_3a',
            name: 'Listening',
            targetWeight: 100,
            fullModeMidtermWeight: 100,
            fullModeFinalWeight: 100,
            categories: [
              { id: 'c_l_wq_3a', name: 'Weekly Quiz', weight: 5, midtermWeight: 0, finalWeight: 0, itemCount: 10, itemMaxScores: Array(10).fill(10) },
              { id: 'c_l_icq_3a', name: 'In-Class Quiz', weight: 5, midtermWeight: 0, finalWeight: 0, itemCount: 10, itemMaxScores: Array(10).fill(10) },
              { id: 'c_l_hw_3a', name: 'Homework', weight: 5, midtermWeight: 0, finalWeight: 0, itemCount: 1, itemMaxScores: [10] },
              { id: 'c_l_att_3a', name: 'Attendance & Class Parti.', weight: 5, midtermWeight: 0, finalWeight: 0, itemCount: 1, itemMaxScores: [10] },
              { id: 'c_l_mid_3a', name: 'Midterm Test', weight: 30, midtermWeight: 100, finalWeight: 0, itemCount: 1, itemMaxScores: [100] },
              { id: 'c_l_fin_3a', name: 'Final Test', weight: 50, midtermWeight: 0, finalWeight: 100, itemCount: 1, itemMaxScores: [100] },
            ]
          },
          {
            id: 's_speaking_3a',
            name: 'Speaking',
            targetWeight: 100,
            fullModeMidtermWeight: 100,
            fullModeFinalWeight: 100,
            categories: [
              { id: 'c_s_wq_3a', name: 'Weekly Quiz', weight: 5, midtermWeight: 0, finalWeight: 0, itemCount: 10, itemMaxScores: Array(10).fill(10) },
              { id: 'c_s_icq_3a', name: 'In-Class Quiz', weight: 5, midtermWeight: 0, finalWeight: 0, itemCount: 10, itemMaxScores: Array(10).fill(10) },
              { id: 'c_s_wt_3a', name: 'Whiteboard Talk', weight: 8, midtermWeight: 0, finalWeight: 0, itemCount: 1, itemMaxScores: [10] },
              { id: 'c_s_tsp_3a', name: 'Three-Student Presentation', weight: 7, midtermWeight: 0, finalWeight: 0, itemCount: 1, itemMaxScores: [10] },
              { id: 'c_s_hw_att_3a', name: 'Homework, Att. & Class Part.', weight: 5, midtermWeight: 0, finalWeight: 0, itemCount: 1, itemMaxScores: [10] },
              { id: 'c_s_mid_3a', name: 'Midterm Test', weight: 30, midtermWeight: 100, finalWeight: 0, itemCount: 1, itemMaxScores: [100] },
              { id: 'c_s_fin_3a', name: 'Final Test', weight: 40, midtermWeight: 0, finalWeight: 100, itemCount: 1, itemMaxScores: [100] },
            ]
          },
          {
            id: 's_grammar_3a',
            name: 'Grammar',
            targetWeight: 100,
            fullModeMidtermWeight: 100,
            fullModeFinalWeight: 100,
            categories: [
              { id: 'c_g_wq_3a', name: 'Weekly Quiz', weight: 5, midtermWeight: 0, finalWeight: 0, itemCount: 10, itemMaxScores: Array(10).fill(10) },
              { id: 'c_g_icq_3a', name: 'In-Class Quiz', weight: 5, midtermWeight: 0, finalWeight: 0, itemCount: 10, itemMaxScores: Array(10).fill(10) },
              { id: 'c_g_hw_3a', name: 'Homework', weight: 10, midtermWeight: 0, finalWeight: 0, itemCount: 1, itemMaxScores: [10] },
              { id: 'c_g_att_3a', name: 'Attendance & Class Parti.', weight: 5, midtermWeight: 0, finalWeight: 0, itemCount: 1, itemMaxScores: [10] },
              { id: 'c_g_mid_3a', name: 'Midterm Test', weight: 25, midtermWeight: 100, finalWeight: 0, itemCount: 1, itemMaxScores: [100] },
              { id: 'c_g_fin_3a', name: 'Final Test', weight: 50, midtermWeight: 0, finalWeight: 100, itemCount: 1, itemMaxScores: [100] },
            ]
          }
        ],
        gradingScale: [
          { grade: 'A+', minScore: 95 },
          { grade: 'A', minScore: 90 },
          { grade: 'B', minScore: 80 },
          { grade: 'C', minScore: 70 },
          { grade: 'D', minScore: 60 },
          { grade: 'E', minScore: 50 },
          { grade: 'F', minScore: 0 }
        ],
        statusScale: [
          { grade: 'Pass', minScore: 70 },
          { grade: 'Fail', minScore: 0 }
        ]
      }
    ]
  },

  {
    id: 'system-level-3b',
    name: 'Level 3B Template (Official)',
    authorName: 'System',
    levels: [
      {
        id: 'l3b',
        name: 'Level 3B',
        subjects: [
          {
            id: 's_reading_3b',
            name: 'Reading',
            targetWeight: 100,
            fullModeMidtermWeight: 100,
            fullModeFinalWeight: 100,
            categories: [
              { id: 'c_r_wq_3b', name: 'Weekly Quiz', weight: 4, midtermWeight: 0, finalWeight: 0, itemCount: 10, itemMaxScores: Array(10).fill(10) },
              { id: 'c_r_icq_3b', name: 'In-Class Quiz', weight: 5, midtermWeight: 0, finalWeight: 0, itemCount: 10, itemMaxScores: Array(10).fill(10) },
              { id: 'c_r_hw_3b', name: 'Homework', weight: 5, midtermWeight: 0, finalWeight: 0, itemCount: 1, itemMaxScores: [10] },
              { id: 'c_r_ra_3b', name: 'Reading Assignments', weight: 16, midtermWeight: 0, finalWeight: 0, itemCount: 2, itemMaxScores: [100, 60] },
              { id: 'c_r_att_3b', name: 'Attendance & Class Parti.', weight: 5, midtermWeight: 0, finalWeight: 0, itemCount: 1, itemMaxScores: [10] },
              { id: 'c_r_mid_3b', name: 'Midterm Test', weight: 25, midtermWeight: 100, finalWeight: 0, itemCount: 1, itemMaxScores: [100] },
              { id: 'c_r_fin_3b', name: 'Final Test', weight: 40, midtermWeight: 0, finalWeight: 100, itemCount: 1, itemMaxScores: [100] },
            ]
          },
          {
            id: 's_writing_3b',
            name: 'Writing',
            targetWeight: 100,
            fullModeMidtermWeight: 100,
            fullModeFinalWeight: 100,
            categories: [
              { id: 'c_w_wq_3b', name: 'Weekly Quiz', weight: 5, midtermWeight: 0, finalWeight: 0, itemCount: 10, itemMaxScores: Array(10).fill(10) },
              { id: 'c_w_icq_3b', name: 'In-Class Quiz', weight: 5, midtermWeight: 0, finalWeight: 0, itemCount: 10, itemMaxScores: Array(10).fill(10) },
              { id: 'c_w_wa1_3b', name: 'Writing Assignment 1', weight: 7.5, midtermWeight: 0, finalWeight: 0, itemCount: 1, itemMaxScores: [10] },
              { id: 'c_w_wa2_3b', name: 'Writing Assignment 2', weight: 7.5, midtermWeight: 0, finalWeight: 0, itemCount: 1, itemMaxScores: [10] },
              { id: 'c_w_hw_3b', name: 'Homework', weight: 5, midtermWeight: 0, finalWeight: 0, itemCount: 1, itemMaxScores: [10] },
              { id: 'c_w_hw_att_3b', name: 'Homework, Att. & Class Part.', weight: 5, midtermWeight: 0, finalWeight: 0, itemCount: 1, itemMaxScores: [10] },
              { id: 'c_w_mid_3b', name: 'Midterm Test', weight: 25, midtermWeight: 100, finalWeight: 0, itemCount: 1, itemMaxScores: [100] },
              { id: 'c_w_fin_3b', name: 'Final Test', weight: 40, midtermWeight: 0, finalWeight: 100, itemCount: 1, itemMaxScores: [100] },
            ]
          },
          {
            id: 's_computer_3b',
            name: 'Computer',
            targetWeight: 100,
            fullModeMidtermWeight: 100,
            fullModeFinalWeight: 100,
            categories: [
              { id: 'c_c_att_3b', name: 'Attendance', weight: 5, midtermWeight: 0, finalWeight: 0, itemCount: 1, itemMaxScores: [10] },
              { id: 'c_c_cp_3b', name: 'Class Participation', weight: 5, midtermWeight: 0, finalWeight: 0, itemCount: 1, itemMaxScores: [10] },
              { id: 'c_c_mid_3b', name: 'Midterm Test', weight: 40, midtermWeight: 100, finalWeight: 0, itemCount: 1, itemMaxScores: [100] },
              { id: 'c_c_fin_3b', name: 'Final Test', weight: 50, midtermWeight: 0, finalWeight: 100, itemCount: 1, itemMaxScores: [100] },
            ]
          },
          {
            id: 's_listening_3b',
            name: 'Listening',
            targetWeight: 100,
            fullModeMidtermWeight: 100,
            fullModeFinalWeight: 100,
            categories: [
              { id: 'c_l_wq_3b', name: 'Weekly Quiz', weight: 5, midtermWeight: 0, finalWeight: 0, itemCount: 10, itemMaxScores: Array(10).fill(10) },
              { id: 'c_l_icq_3b', name: 'In-Class Quiz', weight: 5, midtermWeight: 0, finalWeight: 0, itemCount: 10, itemMaxScores: Array(10).fill(10) },
              { id: 'c_l_hw_3b', name: 'Homework', weight: 5, midtermWeight: 0, finalWeight: 0, itemCount: 1, itemMaxScores: [10] },
              { id: 'c_l_att_3b', name: 'Attendance & Class Parti.', weight: 5, midtermWeight: 0, finalWeight: 0, itemCount: 1, itemMaxScores: [10] },
              { id: 'c_l_mid_3b', name: 'Midterm Test', weight: 30, midtermWeight: 100, finalWeight: 0, itemCount: 1, itemMaxScores: [100] },
              { id: 'c_l_fin_3b', name: 'Final Test', weight: 50, midtermWeight: 0, finalWeight: 100, itemCount: 1, itemMaxScores: [100] },
            ]
          },
          {
            id: 's_speaking_3b',
            name: 'Speaking',
            targetWeight: 100,
            fullModeMidtermWeight: 100,
            fullModeFinalWeight: 100,
            categories: [
              { id: 'c_s_wq_3b', name: 'Weekly Quiz', weight: 5, midtermWeight: 0, finalWeight: 0, itemCount: 10, itemMaxScores: Array(10).fill(10) },
              { id: 'c_s_icq_3b', name: 'In-Class Quiz', weight: 5, midtermWeight: 0, finalWeight: 0, itemCount: 10, itemMaxScores: Array(10).fill(10) },
              { id: 'c_s_otsp_3b', name: 'One Two-Student Presentation', weight: 8, midtermWeight: 0, finalWeight: 0, itemCount: 1, itemMaxScores: [10] },
              { id: 'c_s_icp_3b', name: 'In-Class Presentation', weight: 7, midtermWeight: 0, finalWeight: 0, itemCount: 1, itemMaxScores: [10] },
              { id: 'c_s_hw_att_3b', name: 'Homework, Att. & Class Part.', weight: 5, midtermWeight: 0, finalWeight: 0, itemCount: 1, itemMaxScores: [10] },
              { id: 'c_s_mid_3b', name: 'Midterm Test', weight: 30, midtermWeight: 100, finalWeight: 0, itemCount: 1, itemMaxScores: [100] },
              { id: 'c_s_fin_3b', name: 'Final Test', weight: 40, midtermWeight: 0, finalWeight: 100, itemCount: 1, itemMaxScores: [100] },
            ]
          },
          {
            id: 's_grammar_3b',
            name: 'Grammar',
            targetWeight: 100,
            fullModeMidtermWeight: 100,
            fullModeFinalWeight: 100,
            categories: [
              { id: 'c_g_wq_3b', name: 'Weekly Quiz', weight: 5, midtermWeight: 0, finalWeight: 0, itemCount: 10, itemMaxScores: Array(10).fill(10) },
              { id: 'c_g_icq_3b', name: 'In-Class Quiz', weight: 5, midtermWeight: 0, finalWeight: 0, itemCount: 10, itemMaxScores: Array(10).fill(10) },
              { id: 'c_g_hw_3b', name: 'Homework', weight: 10, midtermWeight: 0, finalWeight: 0, itemCount: 1, itemMaxScores: [10] },
              { id: 'c_g_att_3b', name: 'Attendance & Class Parti.', weight: 5, midtermWeight: 0, finalWeight: 0, itemCount: 1, itemMaxScores: [10] },
              { id: 'c_g_mid_3b', name: 'Midterm Test', weight: 25, midtermWeight: 100, finalWeight: 0, itemCount: 1, itemMaxScores: [100] },
              { id: 'c_g_fin_3b', name: 'Final Test', weight: 50, midtermWeight: 0, finalWeight: 100, itemCount: 1, itemMaxScores: [100] },
            ]
          },
          {
            id: 's_science_3b',
            name: 'Science',
            targetWeight: 100,
            fullModeMidtermWeight: 100,
            fullModeFinalWeight: 100,
            categories: [
              { id: 'c_sc_qz_3b', name: 'Quiz', weight: 10, midtermWeight: 0, finalWeight: 0, itemCount: 10, itemMaxScores: Array(10).fill(10) },
              { id: 'c_sc_hw_3b', name: 'Homework', weight: 5, midtermWeight: 0, finalWeight: 0, itemCount: 1, itemMaxScores: [10] },
              { id: 'c_sc_att_3b', name: 'Attendance & Class Parti.', weight: 5, midtermWeight: 0, finalWeight: 0, itemCount: 1, itemMaxScores: [10] },
              { id: 'c_sc_mid_3b', name: 'Midterm Test', weight: 30, midtermWeight: 100, finalWeight: 0, itemCount: 1, itemMaxScores: [100] },
              { id: 'c_sc_fin_3b', name: 'Final Test', weight: 50, midtermWeight: 0, finalWeight: 100, itemCount: 1, itemMaxScores: [100] },
            ]
          }
        ],
        gradingScale: [
          { grade: 'A+', minScore: 95 },
          { grade: 'A', minScore: 90 },
          { grade: 'B', minScore: 80 },
          { grade: 'C', minScore: 70 },
          { grade: 'D', minScore: 60 },
          { grade: 'E', minScore: 50 },
          { grade: 'F', minScore: 0 }
        ],
        statusScale: [
          { grade: 'Pass', minScore: 70 },
          { grade: 'Fail', minScore: 0 }
        ]
      }
    ]
  },


  {
    id: 'system-level-2a',
    name: 'Level 2A Template (Official)',
    authorName: 'System',
    levels: [
      {
        id: 'l2a',
        name: 'Level 2A',
        subjects: [
          {
            id: 's_reading_2a',
            name: 'Reading',
            targetWeight: 100,
            fullModeMidtermWeight: 100,
            fullModeFinalWeight: 100,
            categories: [
              { id: 'c_r_wq_2a', name: 'Weekly Quiz', weight: 5, midtermWeight: 0, finalWeight: 0, itemCount: 10, itemMaxScores: Array(10).fill(10) },
              { id: 'c_r_icq_2a', name: 'In-Class Quiz', weight: 5, midtermWeight: 0, finalWeight: 0, itemCount: 10, itemMaxScores: Array(10).fill(10) },
              { id: 'c_r_hw_2a', name: 'Homework', weight: 5, midtermWeight: 0, finalWeight: 0, itemCount: 1, itemMaxScores: [10] },
              { id: 'c_r_ra_2a', name: 'Reading Assignments', weight: 14, midtermWeight: 0, finalWeight: 0, itemCount: 2, itemMaxScores: [80, 60] },
              { id: 'c_r_att_2a', name: 'Attendance & Class Parti.', weight: 5, midtermWeight: 0, finalWeight: 0, itemCount: 1, itemMaxScores: [10] },
              { id: 'c_r_mid_2a', name: 'Midterm Test', weight: 26, midtermWeight: 100, finalWeight: 0, itemCount: 2, itemMaxScores: [30, 70] },
              { id: 'c_r_fin_2a', name: 'Final Test', weight: 40, midtermWeight: 0, finalWeight: 100, itemCount: 2, itemMaxScores: [30, 70] },
            ]
          },
          {
            id: 's_writing_2a',
            name: 'Writing',
            targetWeight: 100,
            fullModeMidtermWeight: 100,
            fullModeFinalWeight: 100,
            categories: [
              { id: 'c_w_wq_2a', name: 'Weekly Quiz', weight: 5, midtermWeight: 0, finalWeight: 0, itemCount: 10, itemMaxScores: Array(10).fill(10) },
              { id: 'c_w_icq_2a', name: 'In-Class Quiz', weight: 5, midtermWeight: 0, finalWeight: 0, itemCount: 10, itemMaxScores: Array(10).fill(10) },
              { id: 'c_w_jw_2a', name: 'Journal Writing', weight: 5, midtermWeight: 0, finalWeight: 0, itemCount: 1, itemMaxScores: [10] },
              { id: 'c_w_wa_2a', name: 'Writing Assignments', weight: 10, midtermWeight: 0, finalWeight: 0, itemCount: 2, itemMaxScores: [50, 50] },
              { id: 'c_w_hw_2a', name: 'Homework', weight: 5, midtermWeight: 0, finalWeight: 0, itemCount: 1, itemMaxScores: [10] },
              { id: 'c_w_att_2a', name: 'Attendance. & Class. Part.', weight: 5, midtermWeight: 0, finalWeight: 0, itemCount: 1, itemMaxScores: [10] },
              { id: 'c_w_mid_2a', name: 'Midterm Test', weight: 25, midtermWeight: 100, finalWeight: 0, itemCount: 1, itemMaxScores: [100] },
              { id: 'c_w_fin_2a', name: 'Final Test', weight: 40, midtermWeight: 0, finalWeight: 100, itemCount: 1, itemMaxScores: [100] },
            ]
          },
          {
            id: 's_listening_2a',
            name: 'Listening',
            targetWeight: 100,
            fullModeMidtermWeight: 100,
            fullModeFinalWeight: 100,
            categories: [
              { id: 'c_l_wq_2a', name: 'Weekly Quiz', weight: 5, midtermWeight: 0, finalWeight: 0, itemCount: 10, itemMaxScores: Array(10).fill(10) },
              { id: 'c_l_icq_2a', name: 'In-Class Quiz', weight: 5, midtermWeight: 0, finalWeight: 0, itemCount: 10, itemMaxScores: Array(10).fill(10) },
              { id: 'c_l_hw_2a', name: 'Homework', weight: 5, midtermWeight: 0, finalWeight: 0, itemCount: 1, itemMaxScores: [10] },
              { id: 'c_l_att_2a', name: 'Att. & Class Parti.', weight: 5, midtermWeight: 0, finalWeight: 0, itemCount: 1, itemMaxScores: [10] },
              { id: 'c_l_mid_2a', name: 'Midterm Test', weight: 30, midtermWeight: 100, finalWeight: 0, itemCount: 1, itemMaxScores: [100] },
              { id: 'c_l_fin_2a', name: 'Final Test', weight: 50, midtermWeight: 0, finalWeight: 100, itemCount: 1, itemMaxScores: [100] },
            ]
          },
          {
            id: 's_speaking_2a',
            name: 'Speaking',
            targetWeight: 100,
            fullModeMidtermWeight: 100,
            fullModeFinalWeight: 100,
            categories: [
              { id: 'c_s_wq_2a', name: 'Weekly Quiz', weight: 5, midtermWeight: 0, finalWeight: 0, itemCount: 10, itemMaxScores: Array(10).fill(10) },
              { id: 'c_s_icq_2a', name: 'In-Class Quiz', weight: 5, midtermWeight: 0, finalWeight: 0, itemCount: 10, itemMaxScores: Array(10).fill(10) },
              { id: 'c_s_pres_2a', name: 'Presentation', weight: 7, midtermWeight: 0, finalWeight: 0, itemCount: 1, itemMaxScores: [10] },
              { id: 'c_s_pc_2a', name: 'Pair-Conversation', weight: 8, midtermWeight: 0, finalWeight: 0, itemCount: 1, itemMaxScores: [10] },
              { id: 'c_s_hw_2a', name: 'Homework', weight: 5, midtermWeight: 0, finalWeight: 0, itemCount: 1, itemMaxScores: [10] },
              { id: 'c_s_att_2a', name: 'Attendance & Class Parti.', weight: 5, midtermWeight: 0, finalWeight: 0, itemCount: 1, itemMaxScores: [10] },
              { id: 'c_s_mid_2a', name: 'Midterm Test', weight: 25, midtermWeight: 100, finalWeight: 0, itemCount: 1, itemMaxScores: [100] },
              { id: 'c_s_fin_2a', name: 'Final Test', weight: 40, midtermWeight: 0, finalWeight: 100, itemCount: 1, itemMaxScores: [100] },
            ]
          },
          {
            id: 's_computer_2a',
            name: 'Computer',
            targetWeight: 100,
            fullModeMidtermWeight: 100,
            fullModeFinalWeight: 100,
            categories: [
              { id: 'c_c_att_2a', name: 'Computer Attendance', weight: 5, midtermWeight: 0, finalWeight: 0, itemCount: 1, itemMaxScores: [10] },
              { id: 'c_c_cp_2a', name: 'Class Participation', weight: 5, midtermWeight: 0, finalWeight: 0, itemCount: 1, itemMaxScores: [10] },
              { id: 'c_c_mid_2a', name: 'Midterm Test', weight: 40, midtermWeight: 100, finalWeight: 0, itemCount: 1, itemMaxScores: [100] },
              { id: 'c_c_fin_2a', name: 'Final Test', weight: 50, midtermWeight: 0, finalWeight: 100, itemCount: 1, itemMaxScores: [100] },
            ]
          }
        ],
        gradingScale: [
          { grade: 'A+', minScore: 95 },
          { grade: 'A', minScore: 90 },
          { grade: 'B', minScore: 80 },
          { grade: 'C', minScore: 70 },
          { grade: 'D', minScore: 60 },
          { grade: 'E', minScore: 50 },
          { grade: 'F', minScore: 0 }
        ],
        statusScale: [
          { grade: 'Pass', minScore: 70 },
          { grade: 'Fail', minScore: 0 }
        ]
      }
    ]
  },


  {
    id: 'system-level-2b',
    name: 'Level 2B Template (Official)',
    authorName: 'System',
    levels: [
      {
        id: 'l2b',
        name: 'Level 2B',
        subjects: [
          {
            id: 's_reading_2a',
            name: 'Reading',
            targetWeight: 100,
            fullModeMidtermWeight: 100,
            fullModeFinalWeight: 100,
            categories: [
              { id: 'c_r_wq_2a', name: 'Weekly Quiz', weight: 5, midtermWeight: 0, finalWeight: 0, itemCount: 10, itemMaxScores: Array(10).fill(10) },
              { id: 'c_r_icq_2a', name: 'In-Class Quiz', weight: 5, midtermWeight: 0, finalWeight: 0, itemCount: 10, itemMaxScores: Array(10).fill(10) },
              { id: 'c_r_hw_2a', name: 'Homework', weight: 5, midtermWeight: 0, finalWeight: 0, itemCount: 1, itemMaxScores: [10] },
              { id: 'c_r_ra_2a', name: 'Reading Assignments', weight: 14, midtermWeight: 0, finalWeight: 0, itemCount: 2, itemMaxScores: [80, 60] },
              { id: 'c_r_att_2a', name: 'Attendance & Class Parti.', weight: 5, midtermWeight: 0, finalWeight: 0, itemCount: 1, itemMaxScores: [10] },
              { id: 'c_r_mid_2a', name: 'Midterm Test', weight: 26, midtermWeight: 100, finalWeight: 0, itemCount: 2, itemMaxScores: [30, 70] },
              { id: 'c_r_fin_2a', name: 'Final Test', weight: 40, midtermWeight: 0, finalWeight: 100, itemCount: 2, itemMaxScores: [30, 70] },
            ]
          },
          {
            id: 's_writing_2a',
            name: 'Writing',
            targetWeight: 100,
            fullModeMidtermWeight: 100,
            fullModeFinalWeight: 100,
            categories: [
              { id: 'c_w_wq_2a', name: 'Weekly Quiz', weight: 5, midtermWeight: 0, finalWeight: 0, itemCount: 10, itemMaxScores: Array(10).fill(10) },
              { id: 'c_w_icq_2a', name: 'In-Class Quiz', weight: 5, midtermWeight: 0, finalWeight: 0, itemCount: 10, itemMaxScores: Array(10).fill(10) },
              { id: 'c_w_jw_2a', name: 'Journal Writing', weight: 5, midtermWeight: 0, finalWeight: 0, itemCount: 1, itemMaxScores: [10] },
              { id: 'c_w_wa_2a', name: 'Writing Assignments', weight: 10, midtermWeight: 0, finalWeight: 0, itemCount: 2, itemMaxScores: [50, 50] },
              { id: 'c_w_hw_2a', name: 'Homework', weight: 5, midtermWeight: 0, finalWeight: 0, itemCount: 1, itemMaxScores: [10] },
              { id: 'c_w_att_2a', name: 'Attendance. & Class. Part.', weight: 5, midtermWeight: 0, finalWeight: 0, itemCount: 1, itemMaxScores: [10] },
              { id: 'c_w_mid_2a', name: 'Midterm Test', weight: 25, midtermWeight: 100, finalWeight: 0, itemCount: 1, itemMaxScores: [100] },
              { id: 'c_w_fin_2a', name: 'Final Test', weight: 40, midtermWeight: 0, finalWeight: 100, itemCount: 1, itemMaxScores: [100] },
            ]
          },
          {
            id: 's_listening_2a',
            name: 'Listening',
            targetWeight: 100,
            fullModeMidtermWeight: 100,
            fullModeFinalWeight: 100,
            categories: [
              { id: 'c_l_wq_2a', name: 'Weekly Quiz', weight: 5, midtermWeight: 0, finalWeight: 0, itemCount: 10, itemMaxScores: Array(10).fill(10) },
              { id: 'c_l_icq_2a', name: 'In-Class Quiz', weight: 5, midtermWeight: 0, finalWeight: 0, itemCount: 10, itemMaxScores: Array(10).fill(10) },
              { id: 'c_l_hw_2a', name: 'Homework', weight: 5, midtermWeight: 0, finalWeight: 0, itemCount: 1, itemMaxScores: [10] },
              { id: 'c_l_att_2a', name: 'Att. & Class Parti.', weight: 5, midtermWeight: 0, finalWeight: 0, itemCount: 1, itemMaxScores: [10] },
              { id: 'c_l_mid_2a', name: 'Midterm Test', weight: 30, midtermWeight: 100, finalWeight: 0, itemCount: 1, itemMaxScores: [100] },
              { id: 'c_l_fin_2a', name: 'Final Test', weight: 50, midtermWeight: 0, finalWeight: 100, itemCount: 1, itemMaxScores: [100] },
            ]
          },
          {
            id: 's_speaking_2a',
            name: 'Speaking',
            targetWeight: 100,
            fullModeMidtermWeight: 100,
            fullModeFinalWeight: 100,
            categories: [
              { id: 'c_s_wq_2a', name: 'Weekly Quiz', weight: 5, midtermWeight: 0, finalWeight: 0, itemCount: 10, itemMaxScores: Array(10).fill(10) },
              { id: 'c_s_icq_2a', name: 'In-Class Quiz', weight: 5, midtermWeight: 0, finalWeight: 0, itemCount: 10, itemMaxScores: Array(10).fill(10) },
              { id: 'c_s_pp_2a', name: 'Picture Presentation', weight: 8, midtermWeight: 0, finalWeight: 0, itemCount: 1, itemMaxScores: [10] },
              { id: 'c_s_pt_2a', name: 'Presentation About a Teacher', weight: 7, midtermWeight: 0, finalWeight: 0, itemCount: 1, itemMaxScores: [10] },
              { id: 'c_s_hw_2a', name: 'Homework', weight: 5, midtermWeight: 0, finalWeight: 0, itemCount: 1, itemMaxScores: [10] },
              { id: 'c_s_att_2a', name: 'Attendance & Class Parti.', weight: 5, midtermWeight: 0, finalWeight: 0, itemCount: 1, itemMaxScores: [10] },
              { id: 'c_s_mid_2a', name: 'Midterm Test', weight: 25, midtermWeight: 100, finalWeight: 0, itemCount: 1, itemMaxScores: [100] },
              { id: 'c_s_fin_2a', name: 'Final Test', weight: 40, midtermWeight: 0, finalWeight: 100, itemCount: 1, itemMaxScores: [100] },
            ]
          },
          {
            id: 's_computer_2a',
            name: 'Computer',
            targetWeight: 100,
            fullModeMidtermWeight: 100,
            fullModeFinalWeight: 100,
            categories: [
              { id: 'c_c_att_2a', name: 'Computer Attendance', weight: 5, midtermWeight: 0, finalWeight: 0, itemCount: 1, itemMaxScores: [10] },
              { id: 'c_c_cp_2a', name: 'Class Participation', weight: 5, midtermWeight: 0, finalWeight: 0, itemCount: 1, itemMaxScores: [10] },
              { id: 'c_c_mid_2a', name: 'Midterm Test', weight: 40, midtermWeight: 100, finalWeight: 0, itemCount: 1, itemMaxScores: [100] },
              { id: 'c_c_fin_2a', name: 'Final Test', weight: 50, midtermWeight: 0, finalWeight: 100, itemCount: 1, itemMaxScores: [100] },
            ]
          }
        ],
        gradingScale: [
          { grade: 'A+', minScore: 95 },
          { grade: 'A', minScore: 90 },
          { grade: 'B', minScore: 80 },
          { grade: 'C', minScore: 70 },
          { grade: 'D', minScore: 60 },
          { grade: 'E', minScore: 50 },
          { grade: 'F', minScore: 0 }
        ],
        statusScale: [
          { grade: 'Pass', minScore: 70 },
          { grade: 'Fail', minScore: 0 }
        ]
      }
    ]
  },

  {
    id: 'system-100-percent',
    name: 'Standard 100% Template',
    authorName: 'System',
    levels: [
      {
        id: 'l1',
        name: 'Standard Level',
        subjects: [
          {
            id: 's1',
            name: 'Listening',
            categories: [
              { id: 'c1', name: 'Quizzes', weight: 5, itemCount: 5, itemMaxScores: [100, 100, 100, 100, 100] },
              { id: 'c2', name: 'Assignment', weight: 5, itemCount: 1, itemMaxScores: [100] },
              { id: 'c3', name: 'Class Participation', weight: 5, itemCount: 1, itemMaxScores: [100] },
              { id: 'c4', name: 'Homework', weight: 10, itemCount: 5, itemMaxScores: [100, 100, 100, 100, 100] }
            ]
          },
          {
            id: 's2',
            name: 'Reading',
            categories: [
              { id: 'c1', name: 'Quizzes', weight: 5, itemCount: 5, itemMaxScores: [100, 100, 100, 100, 100] },
              { id: 'c2', name: 'Assignment', weight: 5, itemCount: 1, itemMaxScores: [100] },
              { id: 'c3', name: 'Class Participation', weight: 5, itemCount: 1, itemMaxScores: [100] },
              { id: 'c4', name: 'Homework', weight: 10, itemCount: 5, itemMaxScores: [100, 100, 100, 100, 100] }
            ]
          },
          {
            id: 's3',
            name: 'Grammar',
            categories: [
              { id: 'c1', name: 'Quizzes', weight: 5, itemCount: 5, itemMaxScores: [100, 100, 100, 100, 100] },
              { id: 'c2', name: 'Assignment', weight: 5, itemCount: 1, itemMaxScores: [100] },
              { id: 'c3', name: 'Class Participation', weight: 5, itemCount: 1, itemMaxScores: [100] },
              { id: 'c4', name: 'Homework', weight: 10, itemCount: 5, itemMaxScores: [100, 100, 100, 100, 100] }
            ]
          },
          {
            id: 's4',
            name: 'Vocabulary',
            categories: [
              { id: 'c1', name: 'Quizzes', weight: 5, itemCount: 5, itemMaxScores: [100, 100, 100, 100, 100] },
              { id: 'c2', name: 'Assignment', weight: 5, itemCount: 1, itemMaxScores: [100] },
              { id: 'c3', name: 'Class Participation', weight: 5, itemCount: 1, itemMaxScores: [100] },
              { id: 'c4', name: 'Homework', weight: 10, itemCount: 5, itemMaxScores: [100, 100, 100, 100, 100] }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'system-level-1a',
    name: 'Level 1A Template',
    authorName: 'System',
    levels: [
      {
        id: 'l1a',
        name: 'Level 1A',
        subjects: [
          {
            id: 's_alphabets',
            name: 'ALPHABETS',
            targetWeight: 50,
            categories: [
              { id: 'c_dict', name: 'Alphabet Dict.', weight: 100, midtermWeight: 100, finalWeight: 100, itemCount: 1, itemMaxScores: [100] },
              { id: 'c_rec', name: 'Alphabet Recogn.', weight: 100, midtermWeight: 100, finalWeight: 100, itemCount: 1, itemMaxScores: [100] },
              { id: 'c_sound', name: 'Alphabet Sounds', weight: 100, midtermWeight: 100, finalWeight: 100, itemCount: 1, itemMaxScores: [100] },
              { id: 'c_writ', name: 'Alphabet Writ.', weight: 100, midtermWeight: 100, finalWeight: 100, itemCount: 1, itemMaxScores: [100] },
              { id: 'c_trac', name: 'Alphabet and W. Trac.', weight: 100, midtermWeight: 100, finalWeight: 100, itemCount: 1, itemMaxScores: [100] },
              { id: 'c_shape', name: 'Shape Tracing', weight: 100, midtermWeight: 100, finalWeight: 100, itemCount: 1, itemMaxScores: [100] },
              { id: 'c_vocab', name: 'Vocabulary', weight: 100, midtermWeight: 100, finalWeight: 100, itemCount: 1, itemMaxScores: [100] },
              { id: 'c_song', name: 'Alphabet Song', weight: 100, midtermWeight: 100, finalWeight: 100, itemCount: 1, itemMaxScores: [100] },
            ]
          },
          {
            id: 's_conv',
            name: 'CONVERSATION',
            targetWeight: 50,
            categories: [
              { id: 'c_conv', name: 'Conversation', weight: 100, midtermWeight: 100, finalWeight: 100, itemCount: 1, itemMaxScores: [100] }
            ]
          }
        ],
        gradingScale: [
          { grade: 'Pass', minScore: 50 },
          { grade: 'Fail', minScore: 0 }
        ]
      }
    ]
  },
  {
    id: 'system-level-1b',
    name: 'Level 1B Template (Official)',
    authorName: 'System',
    levels: [
      {
        id: 'l1b',
        name: 'Level 1B',
        subjects: [
          {
            id: 's_phonics',
            name: 'PHONICS',
            targetWeight: 100,
            categories: [
              { id: 'c_phonics', name: 'PHONICS', weight: 100, midtermWeight: 100, finalWeight: 100, itemCount: 1, itemMaxScores: [100] },
            ]
          },
          {
            id: 's_vocab',
            name: 'VOCABULARY',
            targetWeight: 100,
            categories: [
              { id: 'c_vocab_exam', name: 'Vocabulary', weight: 100, midtermWeight: 100, finalWeight: 100, itemCount: 1, itemMaxScores: [100] },
              { id: 'c_vocab_dict', name: 'Vocabulary Dict.', weight: 70, midtermWeight: 70, finalWeight: 70, itemCount: 1, itemMaxScores: [100] },
              { id: 'c_dictation', name: 'Dictation', weight: 30, midtermWeight: 30, finalWeight: 30, itemCount: 1, itemMaxScores: [100] },
            ]
          },
          {
            id: 's_alphabet_sounds',
            name: 'ALPHABET SOUNDS',
            targetWeight: 100,
            categories: [
              { id: 'c_alpha_sounds', name: 'Alphabet Sounds', weight: 100, midtermWeight: 100, finalWeight: 100, itemCount: 1, itemMaxScores: [100] },
            ]
          },
          {
            id: 's_speaking',
            name: 'SPEAKING',
            targetWeight: 100,
            categories: [
              { id: 'c_speaking', name: 'Speaking', weight: 100, midtermWeight: 100, finalWeight: 100, itemCount: 1, itemMaxScores: [100] },
            ]
          },
          {
            id: 's_termly_metrics',
            name: 'TERMLY METRICS',
            targetWeight: 100,
            categories: [
              { id: 'c_quiz', name: 'Quiz', weight: 7.5, midtermWeight: 0, finalWeight: 0, itemCount: 1, itemMaxScores: [100] },
              { id: 'c_weekly_quiz', name: 'Weekly Quiz', weight: 5, midtermWeight: 0, finalWeight: 0, itemCount: 1, itemMaxScores: [100] },
              { id: 'c_homework', name: 'Homework', weight: 10, midtermWeight: 0, finalWeight: 0, itemCount: 1, itemMaxScores: [100] },
              { id: 'c_class_part', name: 'Class Participation', weight: 2.5, midtermWeight: 0, finalWeight: 0, itemCount: 1, itemMaxScores: [100] },
              { id: 'c_mid_test', name: 'Midterm Test', weight: 25, midtermWeight: 100, finalWeight: 0, itemCount: 1, itemMaxScores: [100] },
              { id: 'c_fin_test', name: 'Final Test', weight: 50, midtermWeight: 0, finalWeight: 100, itemCount: 1, itemMaxScores: [100] },
            ]
          }
        ],
        gradingScale: [
          { grade: 'A+', minScore: 95 },
          { grade: 'A', minScore: 90 },
          { grade: 'B', minScore: 80 },
          { grade: 'C', minScore: 70 },
          { grade: 'D', minScore: 60 },
          { grade: 'E', minScore: 50 },
          { grade: 'F', minScore: 0 }
        ]
      }
    ]
  },
  {
    id: 'system-level-pre2a-i',
    name: 'Level Pre-2A I Template (Official)',
    authorName: 'System',
    levels: [
      {
        id: 'lpre2ai',
        name: 'Level Pre-2A I',
        subjects: [
          {
            id: 's_phonics_pre',
            name: 'PHONICS',
            targetWeight: 100,
            fullModeMidtermWeight: 100,
            fullModeFinalWeight: 100,
            categories: [
              { id: 'c_phonics_pre', name: 'Mid-term', weight: 100, midtermWeight: 100, finalWeight: 0, itemCount: 1, itemMaxScores: [100] },
              { id: 'c_phonics_pre_fin', name: 'Final', weight: 100, midtermWeight: 0, finalWeight: 100, itemCount: 1, itemMaxScores: [100] },
            ]
          },
          {
            id: 's_reading_writing_pre',
            name: 'Reading & Writing',
            targetWeight: 100,
            fullModeMidtermWeight: 100,
            fullModeFinalWeight: 100,
            categories: [
              { id: 'c_reading_pre', name: 'Reading', weight: 30, midtermWeight: 30, finalWeight: 30, itemCount: 1, itemMaxScores: [100] },
              { id: 'c_writing_pre', name: 'Writing', weight: 70, midtermWeight: 70, finalWeight: 70, itemCount: 1, itemMaxScores: [100] },
            ]
          },
          {
            id: 's_speaking_vocab_pre',
            name: 'Speaking & Vocabulary',
            targetWeight: 100,
            fullModeMidtermWeight: 100,
            fullModeFinalWeight: 100,
            categories: [
              { id: 'c_speaking_cat_pre', name: 'Speaking', weight: 25, midtermWeight: 25, finalWeight: 25, itemCount: 1, itemMaxScores: [100] },
              { id: 'c_vocab_cat_pre', name: 'Vocabulary', weight: 40, midtermWeight: 40, finalWeight: 40, itemCount: 1, itemMaxScores: [100] },
              { id: 'c_participation_cat_pre', name: 'Participation', weight: 35, midtermWeight: 35, finalWeight: 35, itemCount: 1, itemMaxScores: [100] },
            ]
          },
          {
            id: 's_oral_written_pre',
            name: 'Oral & Written',
            targetWeight: 100,
            fullModeMidtermWeight: 100,
            fullModeFinalWeight: 100,
            categories: [
              { id: 'c_oral_pre', name: 'Oral', weight: 40, midtermWeight: 40, finalWeight: 40, itemCount: 1, itemMaxScores: [100] },
              { id: 'c_written_pre', name: 'Written Test', weight: 60, midtermWeight: 60, finalWeight: 60, itemCount: 1, itemMaxScores: [100] },
            ]
          },
          {
            id: 's_termly_metrics_pre',
            name: 'TERMLY METRICS',
            targetWeight: 100,
            categories: [
              { id: 'c_quiz_pre', name: 'Quiz', weight: 5, midtermWeight: 0, finalWeight: 0, itemCount: 1, itemMaxScores: [100] },
              { id: 'c_weekly_quiz_pre', name: 'Weekly Quiz', weight: 5, midtermWeight: 0, finalWeight: 0, itemCount: 1, itemMaxScores: [100] },
              { id: 'c_presentation_pre', name: 'Presentation', weight: 10, midtermWeight: 0, finalWeight: 0, itemCount: 1, itemMaxScores: [100] },
              { id: 'c_homework_pre', name: 'Homework', weight: 5, midtermWeight: 0, finalWeight: 0, itemCount: 1, itemMaxScores: [100] },
              { id: 'c_class_part_pre', name: 'Class Participation', weight: 5, midtermWeight: 0, finalWeight: 0, itemCount: 1, itemMaxScores: [100] },
              { id: 'c_mid_test_pre', name: 'Midterm Test', weight: 30, midtermWeight: 100, finalWeight: 0, itemCount: 1, itemMaxScores: [100] },
              { id: 'c_fin_test_pre', name: 'Final Test', weight: 40, midtermWeight: 0, finalWeight: 100, itemCount: 1, itemMaxScores: [100] },
            ]
          }
        ],
        gradingScale: [
          { grade: 'A+', minScore: 95 },
          { grade: 'A', minScore: 90 },
          { grade: 'B', minScore: 80 },
          { grade: 'C', minScore: 70 },
          { grade: 'D', minScore: 60 },
          { grade: 'E', minScore: 50 },
          { grade: 'F', minScore: 0 }
        ],
        statusScale: [
          { grade: 'Pass', minScore: 70 },
          { grade: 'Fail', minScore: 0 }
        ]
      }
    ]
  },
  {
    id: 'system-level-pre2a-ii',
    name: 'Level Pre-2A II Template (Official)',
    authorName: 'System',
    levels: [
      {
        id: 'lpre2aii',
        name: 'Level Pre-2A II',
        subjects: [
          {
            id: 's_phonics_pre2ii',
            name: 'PHONICS',
            targetWeight: 100,
            fullModeMidtermWeight: 100,
            fullModeFinalWeight: 100,
            categories: [
              { id: 'c_phonics_pre2ii', name: 'Mid-term', weight: 100, midtermWeight: 100, finalWeight: 0, itemCount: 1, itemMaxScores: [100] },
              { id: 'c_phonics_pre2ii_fin', name: 'Final', weight: 100, midtermWeight: 0, finalWeight: 100, itemCount: 1, itemMaxScores: [100] },
            ]
          },
          {
            id: 's_reading_writing_pre2ii',
            name: 'Reading & Writing',
            targetWeight: 100,
            fullModeMidtermWeight: 100,
            fullModeFinalWeight: 100,
            categories: [
              { id: 'c_reading_pre2ii', name: 'Reading', weight: 30, midtermWeight: 30, finalWeight: 30, itemCount: 1, itemMaxScores: [100] },
              { id: 'c_writing_pre2ii', name: 'Writing', weight: 70, midtermWeight: 70, finalWeight: 70, itemCount: 1, itemMaxScores: [100] },
            ]
          },
          {
            id: 's_speaking_vocab_pre2ii',
            name: 'Speaking & Vocabulary',
            targetWeight: 100,
            fullModeMidtermWeight: 100,
            fullModeFinalWeight: 100,
            categories: [
              { id: 'c_speaking_cat_pre2ii', name: 'Speaking', weight: 35, midtermWeight: 35, finalWeight: 35, itemCount: 1, itemMaxScores: [100] },
              { id: 'c_vocab_cat_pre2ii', name: 'Vocabulary', weight: 40, midtermWeight: 40, finalWeight: 40, itemCount: 1, itemMaxScores: [100] },
              { id: 'c_participation_cat_pre2ii', name: 'Participation', weight: 25, midtermWeight: 25, finalWeight: 25, itemCount: 1, itemMaxScores: [100] },
            ]
          },
          {
            id: 's_oral_written_pre2ii',
            name: 'Oral & Written',
            targetWeight: 100,
            fullModeMidtermWeight: 100,
            fullModeFinalWeight: 100,
            categories: [
              { id: 'c_oral_pre2ii', name: 'Oral', weight: 40, midtermWeight: 40, finalWeight: 40, itemCount: 1, itemMaxScores: [100] },
              { id: 'c_written_pre2ii', name: 'Written Test', weight: 60, midtermWeight: 60, finalWeight: 60, itemCount: 1, itemMaxScores: [100] },
            ]
          },
          {
            id: 's_termly_metrics_pre2ii',
            name: 'TERMLY METRICS',
            targetWeight: 100,
            categories: [
              { id: 'c_quiz_pre2ii', name: 'Quiz', weight: 7.5, midtermWeight: 0, finalWeight: 0, itemCount: 1, itemMaxScores: [100] },
              { id: 'c_weekly_quiz_pre2ii', name: 'Weekly Quiz', weight: 5, midtermWeight: 0, finalWeight: 0, itemCount: 1, itemMaxScores: [100] },
              { id: 'c_homework_pre2ii', name: 'Homework', weight: 10, midtermWeight: 0, finalWeight: 0, itemCount: 1, itemMaxScores: [100] },
              { id: 'c_class_part_pre2ii', name: 'Class Participation', weight: 2.5, midtermWeight: 0, finalWeight: 0, itemCount: 1, itemMaxScores: [100] },
              { id: 'c_mid_test_pre2ii', name: 'Midterm Test', weight: 25, midtermWeight: 100, finalWeight: 0, itemCount: 1, itemMaxScores: [100] },
              { id: 'c_fin_test_pre2ii', name: 'Final Test', weight: 50, midtermWeight: 0, finalWeight: 100, itemCount: 1, itemMaxScores: [100] },
            ]
          }
        ],
        gradingScale: [
          { grade: 'A+', minScore: 95 },
          { grade: 'A', minScore: 90 },
          { grade: 'B', minScore: 80 },
          { grade: 'C', minScore: 70 },
          { grade: 'D', minScore: 60 },
          { grade: 'E', minScore: 50 },
          { grade: 'F', minScore: 0 }
        ],
        statusScale: [
          { grade: 'Pass', minScore: 70 },
          { grade: 'Fail', minScore: 0 }
        ]
      }
    ]
  },

  {
    id: 'system-foundation-a',
    name: 'Level Foundation A Template (Official)',
    authorName: 'System',
    levels: [
      {
        id: 'foundation_a',
        name: 'Level Foundation A',
        subjects: [
          {
            id: 's_vocab_dict_fa',
            name: 'Vocabulary & Dictation',
            targetWeight: 17.45,
            fullModeMidtermWeight: 18.33,
            fullModeFinalWeight: 81.67,
            midtermMaxScore: 100,
            finalMaxScore: 100,
            categories: [
              { id: 'c_vocab_fa', name: 'Vocabulary Test', weight: 80, midtermWeight: 80, finalWeight: 80, itemCount: 1, itemMaxScores: [100] },
              { id: 'c_dict_fa', name: 'Dictation', weight: 20, midtermWeight: 20, finalWeight: 20, itemCount: 1, itemMaxScores: [100] },
            ]
          },
          {
            id: 's_conv_fa',
            name: 'Conversation',
            targetWeight: 15.85,
            fullModeMidtermWeight: 10.1,
            fullModeFinalWeight: 89.9,
            midtermMaxScore: 100,
            finalMaxScore: 100,
            categories: [
              { id: 'c_conv_cat_fa', name: 'Conversation', weight: 100, midtermWeight: 100, finalWeight: 100, itemCount: 1, itemMaxScores: [100] },
            ]
          },
          {
            id: 's_speak_fa',
            name: 'Speaking',
            targetWeight: 31.70,
            fullModeMidtermWeight: 10.1,
            fullModeFinalWeight: 89.9,
            midtermMaxScore: 100,
            finalMaxScore: 100,
            categories: [
              { id: 'c_speak_cat_fa', name: 'Speaking', weight: 100, midtermWeight: 100, finalWeight: 100, itemCount: 1, itemMaxScores: [100] },
            ]
          },
          {
            id: 's_traffic_fa',
            name: 'Traffic Law',
            targetWeight: 5.0,
            fullModeMidtermWeight: 50,
            fullModeFinalWeight: 50,
            midtermMaxScore: 100,
            finalMaxScore: 100,
            categories: [
              { id: 'c_traffic_cat_fa', name: 'Traffic Law', weight: 100, midtermWeight: 100, finalWeight: 100, itemCount: 1, itemMaxScores: [100] },
            ]
          },
          {
            id: 's_termly_fa',
            name: 'TERMLY METRICS',
            targetWeight: 40.0,
            categories: [
              { id: 'c_att_fa', name: 'Attendance', weight: 12.5, midtermWeight: 0, finalWeight: 0, itemCount: 1, itemMaxScores: [100] },
              { id: 'c_vocab_q_fa', name: 'Vocabulary Quiz', weight: 12.5, midtermWeight: 0, finalWeight: 0, itemCount: 10, itemMaxScores: Array(10).fill(100) },
              { id: 'c_speak_q_fa', name: 'Speaking Quiz', weight: 25, midtermWeight: 0, finalWeight: 0, itemCount: 10, itemMaxScores: Array(10).fill(100) },
              { id: 'c_part_fa', name: 'Class Participation', weight: 12.5, midtermWeight: 0, finalWeight: 0, itemCount: 1, itemMaxScores: [100] },
              { id: 'c_assign_fa', name: 'Assignment', weight: 37.5, midtermWeight: 0, finalWeight: 0, itemCount: 2, itemMaxScores: [100, 100] },
            ]
          }
        ],
        gradingScale: [
          { grade: 'A+', minScore: 95 },
          { grade: 'A', minScore: 90 },
          { grade: 'B', minScore: 80 },
          { grade: 'C', minScore: 70 },
          { grade: 'D', minScore: 60 },
          { grade: 'E', minScore: 50 },
          { grade: 'F', minScore: 0 }
        ],
        statusScale: [
          { grade: 'Pass', minScore: 50 },
          { grade: 'Fail', minScore: 0 }
        ]
      }
    ]
  }
];
