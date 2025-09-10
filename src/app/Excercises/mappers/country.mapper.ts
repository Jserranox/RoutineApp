import { Excercise } from "../interfaces/excercise.interface";


export class ExcerciseMapper {

  static mapExcerciseToCountry( excercise: Excercise ): Excercise {
    return {
      id:          excercise.id,
      name:        excercise.name,
      src_name:    excercise.src_name,
      description: excercise.description,
      muscles:     excercise.muscles
    }
  }

  static mapExcerciseArrayToExcercise( exercise: Excercise[] ) {
    return exercise.map( (excercise) => this.mapExcerciseToCountry(excercise) )
  }

}
