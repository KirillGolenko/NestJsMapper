import { Test, TestingModule } from '@nestjs/testing';
import { Helper } from './helper.service';

describe('ConvertService', () => {
  let service: Helper;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Helper],
    }).compile();

    service = module.get<Helper>(Helper);
  });

  it('should be defined', () => {
    const res = {
      _id: '60acbe4465d7158c922a6d25',
      mapper: {
        user_id: 'USER ID',
        first_name: 'FIRST NAME',
        last_name: 'LAST NAME',
        email: 'EMAIL',
        role: 'ROLE',
        level: 'LEVEL',
        chain: 'CHAIN',
        cluster: 'CLUSTER',
        marsha_core: 'MARSHA CODE/BRAND ID',
        hotel: 'HOTEL',
        features: 'FEATURES',
        created: 'CREATED',
        link: 'INVITATION LINK',
      },
      __v: 0,
    };
    const data = {
      user_id: 'qBBEYFa9BunTmPemw',
      first_name: 'Lotfi',
      last_name: 'Lotfi',
      email: '',
      role: 'user',
      level: 'cluster',
      chain: 'Marriott',
      cluster: 'Mary Quigley',
      marsha_core: '',
      hotel: '',
      features: '',
      created: '07-Mar-2017',
      link: 'qBBEYFa9BunTmPemw',
    };
    const result = {
      'USER ID': 'qBBEYFa9BunTmPemw',
      'FIRST NAME': 'Lotfi',
      'LAST NAME': 'Lotfi',
      EMAIL: '',
      ROLE: 'user',
      LEVEL: 'cluster',
      CHAIN: 'Marriott',
      CLUSTER: 'Mary Quigley',
      'MARSHA CODE/BRAND ID': '',
      HOTEL: '',
      FEATURES: '',
      CREATED: '07-Mar-2017',
      'INVITATION LINK': 'qBBEYFa9BunTmPemw',
    };

    expect(service.applyMapping(res, data)).toStrictEqual(result);
  });
});
