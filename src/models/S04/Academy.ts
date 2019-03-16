namespace VarsWebApi.Models {
    /**คำถามสำหรับสถานศึกษา */
    export interface Academy {
        // TODO:Count, int?
        /**ก่อนวัยเรียน  */
        PreSchool: HasAndCount;

        /**อนุบาล   */
        Kindergarten: HasAndCount;

        /**ประถมศึกษา   */
        PrimarySchool: HasAndCount;

        /**มัธยมศึกษา   */
        Highschool: HasAndCount;

        /**ปวช./ปวส  */
        Vocational: HasAndCount;

        /**อุดมศึกษา   */
        HigherEducation: HasAndCount;

        /**จำนวนบุคลากรรวมทั้งหมดทุกประเภท */
        PersonnelCount: number;
    }
}