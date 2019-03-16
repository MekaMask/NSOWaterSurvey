namespace VarsWebApi.Models {
    /**น้ำบาดาล */
    export interface GroundWater {
        /**5.2.1 บ่อน้้าบาดาลส่วนตัวหรือไม่ */
        PrivateGroundWater: PrivateGroundWater;

        /**5.2.4 บ่อน้ำสาธารณะ */
        PublicGroundWater: PublicGroundWater;
    }
}