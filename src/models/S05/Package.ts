namespace VarsWebApi.Models {
    export interface Package {
        /**ชนิดของบรรจภุัณฑ์  */
        // TODO:
        Name: string;

        /**ขนาดของภาชนะ  */
        Size: number;

        /**จำนวนที่ซื้อต่อเดือน เพื่ออุปโภคบริโภค   */
        Drink: number;

        /**
         * จำนวนที่ซื้อต่อเดือน เพื่อทำเกษตร         
         */
        Agriculture: number;

        /**จำนวนที่ซื้อต่อเดือน เพื่อผลิตสินค้า   */
        Factory: number;

        /**จำนวนที่ซื้อต่อเดือน เพื่อการบริการ */
        Service: number;
    }
}