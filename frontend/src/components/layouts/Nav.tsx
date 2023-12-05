import Link from "next/link";

type NavMenuItem = {
    name: string;
    link: string;
    callBack?: () => void;
};

type NavMenuType = {
    title: string;
    items: NavMenuItem[];
};

export default function NavContent() {
    const NavMenuList: NavMenuType[] = [
        // {
        //     title: "메인",
        //     items: [{ name: "메인 페이지", link: "/" }],
        // },
        // {
        //     title: "방문객 관리",
        //     items: [
        //         { name: "입장 현황", link: "/" },
        //         { name: "입장 관리", link: "/" },
        //     ],
        // },
        // {
        //     title: "매출 관리",
        //     items: [
        //         { name: "결제 현황", link: "/" },
        //         { name: "매출 통계", link: "/" },
        //     ],
        // },
        // {
        //     title: "기타",
        //     items: [
        //         { name: "정보", link: "/" },
        //         { name: "로그아웃", link: "/signin" },
        //     ],
        // },
        {
            title: "메뉴",
            items: [
                { name: "방문객 관리", link: "/" },
                { name: "입장 관리", link: "/entry" },
            ],
        },
    ];
    return (
        <nav className="space-y-2 bg-indigo-950 w-96">
            {NavMenuList.map((group, index) => (
                <div key={index} className="text-indigo-50 text-center mx-2">
                    <div className="text-left mt-6 flex items-center">
                        <div className="mx-3 flex-grow h-px bg-gray-100"></div>
                        <div className="">{group.title}</div>
                        <div className="mx-3 flex-grow h-px bg-gray-100"></div>
                    </div>
                    <div className="mt-3">
                        {group.items.map((item, index) => (
                            <Link href={item.link} key={index}>
                                <div onClick={item.callBack} className="font-medium hover:bg-indigo-900 justify-center flex items-center rounded-full h-12">
                                    {item.name}
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            ))}
        </nav>
    );
}
