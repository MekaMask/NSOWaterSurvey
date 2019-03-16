namespace VarsWebApi.Models {
    /**คำถามสำหรับสถานพยาบาล */
    export interface Hospital {
        /**จำนวนเตียง */
        BedCount: number;

        /**จำนวนบุคลากรรวมทั้งหมดทุกประเภท */
        PersonnelCount: number;
    }
}