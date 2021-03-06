import { type } from "os"

export default TypescriptPage(){

    interface IProfile {
        name: string
        age: number
        school: string
        hobby?: string
    }

    // 1.Pick 타입
    type Mytype1 = Pick<IProfile, "name" | "age">

    // 2.Omit 타입
    type Mytype2 = Omit<IProfile, "school">

    // 3.Partial 타입
    type Mytype3 = Partial<IProfile>

    // 4.Required 타입
    type Mytype4 = Required<IProfile>

    // 5.Record 타입
    type ZZZ = "aaa" | "qqq" | "rrr" // Union 타입
    // let apple: ZZZ
    // apple = "aaa"
    type Mytype5 = Record<ZZZ, IProfile>

    // ===== 추가(선언병합) =====
    interface IProfile {
        candy: number
    }
    // 같은 이름의 인터페이스가 존재하면 두개가 합쳐진다
    let profile: IProfile
    profile = {
        candy: 3,
        age: 10,
        hobby: "asdf"
    }




    return (
        <div>
            타입스크립트 연습하기
        </div>
    )
}