import type { Database } from "firebase/database";
import DB from '@/firebase/database';
import {ref,set} from "firebase/database";

/* const mockCourses:Array<object> =  [{
    name: 'Какой то курс',
    description: 'описание курса с описанием курса и в котором описан курс',
    icon: "mdi-cloud-upload",
    progress: 80,
    deadline: '19 августа хзкакого года',
    budget: 'сколько то баксов 1111',
    avatarLink: 'https://randomuser.me/api/portraits/men/85.jpg',
    id: 1
},
{
    name: 'Какой то курс',
    description: 'описание курса с описанием курса и в котором описан курс',
    icon: "mdi-cloud-upload",
    progress: 80,
    deadline: '19 августа хзкакого года',
    budget: 'сколько то баксов 1111',
    avatarLink: 'https://randomuser.me/api/portraits/men/85.jpg',
    id: 2
},
{
    name: 'Какой то курс',
    description: 'описание курса с описанием курса и в котором описан курс',
    icon: "mdi-cloud-upload",
    progress: 80,
    deadline: '19 августа хзкакого года',
    budget: 'сколько то баксов 1111',
    avatarLink: 'https://randomuser.me/api/portraits/men/85.jpg',
    id: 3
},
{
    name: 'Какой то курс',
    description: 'описание курса с описанием курса и в котором описан курс',
    icon: "mdi-cloud-upload",
    progress: 80,
    deadline: '19 августа хзкакого года',
    budget: 'сколько то баксов 1111',
    avatarLink: 'https://randomuser.me/api/portraits/men/85.jpg',
    id: 4
},
{
    name: 'Какой то курс',
    description: 'описание курса с описанием курса и в котором описан курс',
    icon: "mdi-cloud-upload",
    progress: 80,
    deadline: '19 августа хзкакого года',
    budget: 'сколько то баксов 1111',
    avatarLink: 'https://randomuser.me/api/portraits/men/85.jpg',
    id: 5
},
{
    name: 'Какой то курс',
    description: 'описание курса с описанием курса и в котором описан курс',
    icon: "mdi-cloud-upload",
    progress: 80,
    deadline: '19 августа хзкакого года',
    budget: 'сколько то баксов 1111',
    avatarLink: 'https://randomuser.me/api/portraits/men/85.jpg',
    id: 6
},]

const setcourses = void set(ref(DB, 'courses'), mockCourses); 
export default setcourses; */