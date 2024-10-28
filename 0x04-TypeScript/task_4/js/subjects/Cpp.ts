namespace Subjects {
  //   export interface Teacher {
  //     firstName: string;
  //     lastName: string;
  //     experienceTeachingC?: number;
  //   }

  export class Cpp extends Subject {
    getRequirements(): string {
      return 'Here is the list of requirements for Cpp';
    }

    getAvailableTeacher(): string {
      if (
        this.teacher?.experienceTeachingC === undefined ||
        this.teacher?.experienceTeachingC === null
      ) {
        return 'No available teacher';
      }
      return `Available Teacher: ${this.teacher.firstName}`;
    }
  }
}
