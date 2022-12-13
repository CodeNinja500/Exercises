import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {RoleModel} from '../models/role.model';
import {JobPostModel} from '../models/job-post.model';

@Injectable()
export class JobsService {
  constructor(private _httpClient: HttpClient) {
  }

  getAllJobTags(): Observable<RoleModel[]> {
    return this._httpClient.get<RoleModel[]>('https://636ce2d8ab4814f2b2712854.mockapi.io/job-tags')
  }

  createJobPost(jobPost: Omit<JobPostModel, 'id'>): Observable<JobPostModel> {
    return this._httpClient.post<JobPostModel>('https://636ce2d8ab4814f2b2712854.mockapi.io/job-posts', jobPost)
  }
}
