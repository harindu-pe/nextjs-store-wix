import Menu from "@/components/global/menu";
import HeaderIcons from "@/components/layout/header-icons";
import SearchBar from "@/components/layout/searchbar";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div className="relative h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
      {/* Mobile */}
      <div className="flex h-full items-center justify-between md:hidden">
        <Link href="/">
          <span className="text-2xl tracking-wide">LAMA</span>
        </Link>
        <Menu />
      </div>
      {/* Desktop */}
      <div className="hidden h-full items-center justify-between gap-8 md:flex">
        {/* Left */}
        <div className="flex w-1/3 items-center gap-12 xl:w-1/2">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo.png" alt="logo" width={24} height={24} />
            <span className="text-2xl tracking-wide">LAMA</span>
          </Link>
          <div className="hidden gap-4 xl:flex">
            <Link href="/">Homepage</Link>
            <Link href="/">Shop</Link>
            <Link href="/">Deals</Link>
            <Link href="/">About</Link>
            <Link href="/">Contact</Link>
          </div>
        </div>
        {/* Right */}
        <div className="flex w-2/3 items-center justify-between gap-8 xl:w-1/2">
          <SearchBar />
          <HeaderIcons />
        </div>
      </div>
    </div>
  );
};

export default Header;
