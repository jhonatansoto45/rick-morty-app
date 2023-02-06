

export class PersonajesModel {
  mdName: boolean = true;
  mdStatus: boolean = false;
  mdSpecie: boolean = false;
  mdType: boolean = false;
  mdGender: boolean = false;



  private static instance: PersonajesModel;

  public static getInstance(): PersonajesModel {
    if (!PersonajesModel.instance) {
      PersonajesModel.instance = new PersonajesModel();
    }

    return PersonajesModel.instance;
  }
}
