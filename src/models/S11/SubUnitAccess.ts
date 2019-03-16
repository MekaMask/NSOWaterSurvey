namespace VarsWebApi.Models {
    /**รหัสการเข้าพบยูนิตย่อย */
    export enum SubUnitAccess {
        /**1 มีผู้ให้ข้อมูลให้ความร่วมมือ */
        HasPersonAndAccept = 1,
        /**2 มีผู้ให้ข้อมูลแต่ไม่ให้ความร่วมมือ  */
        HasPersonNoAccept = 2,
        /**3 ไม่มี/ไม่พบผู้ให้ข้อมูล   */
        NoPerson = 3,
        /**4 บ้าน/อาคารว่าง */
        Vacancy = 4,
        /**5 บ้านร้าง   */
        AbandonedHouse = 5
    }
}