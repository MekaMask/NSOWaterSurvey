namespace VarsWebApi.Models {
    /**พื้นที่ย่อย */
    export interface CommunitySample {
        /**การจัดการน้ำในหมู่บ้าน / ชุมชน */
        Management: CommunityWaterManagement;

        /**โครงการจัดการน้้าเพื่อการเกษตรชุมชน  โดยใช้พื้นที่สาธารณะ */
        CommunityProject: ManagementForFarming;
    }
}