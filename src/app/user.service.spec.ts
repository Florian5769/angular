import { async, TestBed } from '@angular/core/testing';
import { Http, BaseRequestOptions, Response, ResponseOptions, RequestMethod } from '@angular/http';

import { UserService } from './user.service';

describe('UserService', () => {

  let userService: UserService;

  const user = {
    id: 1,
    login: 'flo',
    money: 1000,
    registrationInstant: '2015-12-01T11:00:00Z',
    token: 'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOjF9.5cAW816GUAg3OWKWlsYyXI4w3fDrS5BpnmbyBjVM7lo'
  };

  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      BaseRequestOptions,
      {
        provide: Http,
        useFactory: (backend: any, defaultOptions: any) => new Http(backend, defaultOptions),
        deps: [BaseRequestOptions]
      },
      UserService
    ]
  }));

  beforeEach(() => {
    userService = TestBed.get(UserService);
  });

  it('should register a user', async(() => {
   
    const response = new Response(new ResponseOptions({ body: user }));
   
    
    userService.register(user.login, 'password', 1986).subscribe((res: { id: any; }) => {
      expect(res.id).toBe(1, 'You should transform the Response into a user using the `json()` method.');
    });
  }))});