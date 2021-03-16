import { StorageDirectory } from './entities/storage-directory.entity';

const data: StorageDirectory = {
  id: 'a',
  name: '/',
  children: {
    '192.168.1.101': {
      id: 'a.a',
      name: '192.168.1.101',
      children: {
        '1tv': {
          id: 'a.a.a',
          name: '1tv',
          children: {},
        },
        Russia24: {
          id: 'a.a.b',
          name: 'Russia24',
          children: {},
        },
        CTC: {
          id: 'a.a.c',
          name: 'CTC',
          children: {},
        },
      },
    },
    '10.0.3.40': {
      id: 'a.b',
      name: '10.0.3.40',
      children: {
        documental: {
          id: 'a.b.a',
          name: 'documental',
          children: {
            history: {
              id: 'a.b.a.a',
              name: 'history',
              children: {
                Russia: {
                  id: 'a.b.a.a.a',
                  name: 'Russia',
                  children: {
                    '90x': {
                      id: 'a.b.a.a.a.a',
                      name: '90x',
                      assetId: 'd-h-R-90x',
                    },
                    Revolution: {
                      id: 'a.b.a.a.a.b',
                      name: 'Revolution',
                      assetId: 'dadkjas-asklwqejr',
                    },
                  },
                },
                world: {
                  id: 'a.b.a.a.b',
                  name: 'world',
                  children: {},
                },
              },
            },
          },
        },
      },
    },
  },
};

export default data;
