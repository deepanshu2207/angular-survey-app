import {Ref} from '../model/ref.model';
export interface Orgdata{
      name:string;
      mobile:number;
      org:string;
      respr:string;
      email:string;
      address:string;
      answers:Ref[];      
}