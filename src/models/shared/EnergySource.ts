namespace VarsWebApi.Models {
    /**แหล่งพลังงาน */
    // TODO:
    export enum EnergySource {
        /**ใช้ไฟฟ้า */
        ElecticPump = 1,
        /**ใช้น้้ามันดีเซล(โซล่า) */
        SolaPump = 2,
        /**ใช้น้้ามันเบนซิน */
        PetrolPump = 3,

        /**รถไถเดินตาม */
        TwoWheeledTractors = 4
    }
}