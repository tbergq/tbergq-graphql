// @flow

import { generateTestsFromFixtures } from '@kiwicom/test-utils';

import executeTestQuery from '../../../../common/services/executeTestQuery';

jest.mock('../../../db/BaseExerciseModel.js', () => ({
  getBaseExercises: () =>
    Promise.resolve({
      count: 66,
      baseExercises: [
        {
          id: '38',
          name: 'Alternerende benkpress med hantler',
          videoLink: '',
          muscleGroup: 'Chest',
          description:
            'Start med begge på sterk arm. En side føres ned mens den andre holdes strak. Annen hver side',
        },
        {
          id: '10',
          name: 'Arnold Press',
          videoLink: 'https://www.youtube.com/watch?v=6Z15_WdXmVw',
          muscleGroup: 'Chest',
          description: '',
        },
        {
          id: '2',
          name: 'Band pulls apart',
          videoLink: 'https://www.youtube.com/watch?v=BVehf-8FAxQ',
          muscleGroup: 'Chest',
          description: '',
        },
        {
          id: '7',
          name: 'Benkpress',
          videoLink: 'https://www.youtube.com/watch?v=0k57fpKM2L4',
          muscleGroup: 'Chest',
          description: '',
        },
        {
          id: '36',
          name: 'Benkpress m/hantler',
          videoLink: 'https://www.youtube.com/watch?v=xyzh7OpHEq4',
          muscleGroup: 'Chest',
          description: '',
        },
        {
          id: '63',
          name: 'Biceps i kabelmaskin',
          videoLink: 'https://www.youtube.com/watch?v=mJ0-SWKKInI',
          muscleGroup: 'Chest',
          description: '',
        },
        {
          id: '19',
          name: 'Bulgarsk utfall',
          videoLink: 'https://www.youtube.com/watch?v=zp89Arzfcg4',
          muscleGroup: 'Chest',
        },
        {
          id: '67',
          name: 'Cable cross',
          videoLink: '',
          muscleGroup: 'Chest',
          description: '',
        },
        {
          id: '66',
          name: 'Cable cross rygg',
          videoLink: '',
          muscleGroup: 'Chest',
          description: '',
        },
        {
          id: '65',
          name: 'Chest press',
          muscleGroup: 'Chest',
        },
      ],
    }),
}));

generateTestsFromFixtures(`${__dirname}/__fixtures__`, input => executeTestQuery(input));
