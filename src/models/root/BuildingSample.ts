namespace VarsWebApi.Models {
    /**บ้าน / อาคาร / สิ่งปลูกสร้้าง */
    export interface BuildingSample extends ModelBase {
        /**รหัสเขตแจงนับ */
        EA: string;
        // TODO: เอามั้ย?
        /**ลำดับที่บ้าน/อาคาร/สิ่งปลูกสร้าง */
        Ordering: number;
        /**ชื่อถนนลำน้ำหรือละแวกบ้าน */
        Road: string;
        /**ชื่อตรอก/ซอย */
        Alley: string;
        /**ชื่อหมู่บ้าน/คอนโด/อาคาร/สำนักงาน/สถานประกอบการ/สถาบัน ฯลฯ  */
        Name: string;
        /**เลขที่บ้าน/อาคาร */
        HouseNo: string;
        /**ละติจูด  */
        Latitude: number | null;
        /**ลองจิจูด */
        Longitude: number | null;
        /**ประเภทบ้าน/อาคาร/สิ่งปลูกสร้าง  */
        BuildingType: BuildingType;
        /**อื่นๆ (ระบุประเภทอาคาร) */
        Other: string;

        /**รหัสการเข้าพบ บ้าน/อาคาร/สิ่งปลูกสร้าง */
        Access: BuildingAccess[];

        /**จำนวนบ้านว่าง  */
        VacancyCount: number | null;
        /**จำนวนบ้านร้าง */
        AbandonedCount: number | null;

        /**N - จำนวนครัวเรือน/สถานประกอบการรวมทั้งหมดในบ้าน/อาคาร/สิ่งปลูกสร้าง  */
        UnitCount: number;

        /**
         * ได้รับอนุญาตให้เก็บข้อมูลผู้พักอาศัยในอาคารหรือไม่
         * 1 อนุญาต      
         * 2 ไม่อนุญาตแต่ให้ข้อมูล 
         * 3 ไม่อนุญาตและไม่ให้ข้อมลู
         */
        UnitAccess: UnitAccess;

        /**จ้านวนห้องว่าง */
        VacantRoomCount: number | null;
        /**จำนวนห้องที่มีผู้อาศัย/จำนวนสถานประกอบการ */
        OccupiedRoomCount: number | null;
        /**ปริมาณน้ำ */
        WaterQuantity: number | null;
        /**ค่าน้ำ */
        WaterBill: number | null;

        /**บันทึกปัญหา/อุปสรรค หรือข้อความทั่วไปเพื่อเตือนความจำ */
        Comments: Comment[];


        /**Record Control Compartment */
        RecCtrl: RecordControl;
    }
}