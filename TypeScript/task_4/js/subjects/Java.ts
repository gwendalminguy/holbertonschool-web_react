/// <reference path="./Subject.ts" />
/// <reference path="./Teacher.ts" />

namespace Subjects {
  export interface Teacher {
    experienceTeachingJava?: number;
  }

  export class JavaClass extends Subject {
    getRequirements(): string {
      return 'Here is the list of requirements for Java';
    }

    getAvailableTeacher(): string {
      if (this.teacher && this.teacher.experienceTeachingJava) {
        return `Available Teacher: ${this.teacher.firstName}`;
      }
      return 'No teacher avaiable';
    }
  }
}
