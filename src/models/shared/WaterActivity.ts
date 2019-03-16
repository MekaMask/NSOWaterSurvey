namespace VarsWebApi.Models {
    /*****ปรากฏกิจกรรมเฉพาะที่ระบุไว้ก่อนหน้าว่าใช้น้้า */
    export interface WaterActivity {
        /**1.ใช้เพื่ออุปโภคบริโภค */
        Drink: number;

        /**2.เพื่อรดน้้าพืชในบริเวณที่อยู่อาศัย */
        Plant: number;
        /**3..เพื่อทำนา */
        Farm: number;

        /**4.ใช้เพื่อท้าเกษตร */
        Agriculture: number;

        /**45.เพื่อผลิตสินค้า */
        Product: number;

        /**6.เพื่อการบริการ */
        Service: number;


    }
}
