namespace VarsWebApi.Models {
    /**คำถามสำหรับปลูกสร้าง */
    export interface Building {
        /**จำนวนห้อง */
        RoomCount: number;

        /**จำนวนห้องที่มีคนอาศัย */
        // TODO:
        OccupiedRoomCount: number;

        /**จำนวนบุคลากรรวมทั้งหมดทุกประเภท */
        PersonnelCount: number;
    }
}