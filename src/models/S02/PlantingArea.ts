namespace VarsWebApi.Models {
    /**ลักษณะการใช้พื้นที่ในการเพาะปลูก */
    export enum PlantingArea {
        /**1. ทำทั้งแปลงทุกครั้ง */
        AllArea = 1,
        /**2. ไม่ได้ทำทั้งแปลง แต่ทำเท่ากันทุกครั้ง */
        EqualSize = 2,
        /**3. ไม่ได้ทำทั้งแปลง และทำไม่เท่ากันทุกครั้ง */
        DifferentSize = 3,
    }
}