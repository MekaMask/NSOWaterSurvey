namespace VarsWebApi.Models {
    /**สระน้้า หนองน้้า บึง  */
    export interface Pool extends WaterResourceBase<WaterConsumptionUsingPump> {
        /**หาก “มี” มีจำนวนกี่สระ */
        PoolCount: number;

        /**ขนาดสระน้้าทั้งหมดเท่ากันหรือไม่ (ให้ถามถ้าจ้านวนสระในข้อ 5.4.2 มากกว่า 1 สระ) */
        HasSameSize: boolean;

        /**ถามขนาดของสระ */
        PoolSizes: FieldSize[];
    }
}