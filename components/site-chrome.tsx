import Image from "next/image";
import Link from "next/link";

type SiteHeaderProps = { page: "home" | "profile" };

export function SiteHeader({ page }: SiteHeaderProps) {
  return (
    <header className="topbar">
      <Link className="brand" href="/" aria-label="Beranda Desa Sroyo">
        <Image src="/figma/crest.png" alt="Lambang Kabupaten Karanganyar" width={48} height={58} priority />
        <span>Pemerintah Kota Karanganyar<br />Kecamatan Jaten<br />Desa Sroyo</span>
      </Link>
      <nav className="nav" aria-label="Navigasi utama">
        <Link className={page === "home" ? "active" : undefined} href={page === "home" ? "#beranda" : "/"}>Beranda</Link>
        <Link className={page === "profile" ? "active" : undefined} href="/profil">Profil</Link>
        <Link href="#kontak">Kontak</Link>
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer id="footer">
      <div className="footerTop">
        <div className="footerBrand">
          <Link className="footerIdentity" href="/">
            <Image src="/figma/crest.png" alt="Lambang Kabupaten Karanganyar" width={40} height={48} />
            <div className="footerIdentityInfo"><strong>Pemerintah Kota Karanganyar</strong><span>Kecamatan Jaten</span><span>Desa Sroyo</span></div>
          </Link>
          <p>Portal informasi resmi Pemerintah Desa Sroyo untuk pelayanan dan keterbukaan informasi warga.</p>
          <div className="contactDetail"><span>Jl. Raya Solo - Sragen KM 7.5, Desa Sroyo</span><span>Senin - Jumat | 08.00 - 15.00 WIB</span><span>+62 812-3456-7890</span></div>
        </div>
        <div><h4>Navigasi Utama</h4><Link href="/">Beranda</Link><Link href="/profil">Profil Wilayah</Link><Link href="/profil#layanan">Layanan Surat Online</Link><Link href="/#beranda">Transparansi APBDes</Link></div>
        <div id="kontak"><h4>Hubungi Kami</h4><a href="mailto:desa-sroyo@karanganyarkab.go.id">desa-sroyo@karanganyarkab.go.id</a><a href="tel:+6281234567890">+62 812-3456-7890</a><a href="#kontak">Pos Pengaduan Warga</a></div>
      </div>
      <div className="footerBottom">
        <div><p>Terhubung Bersama Kami</p><div className="socialLinks">
          <a href="https://youtube.com" aria-label="YouTube"><Image className="icon" src="/icon/youtube.svg" alt="" width={18} height={18} /></a>
          <a href="https://instagram.com" aria-label="Instagram"><Image className="icon" src="/icon/instagram.svg" alt="" width={18} height={18} /></a>
          <a href="https://x.com" aria-label="X"><Image className="icon" src="/icon/x.svg" alt="" width={18} height={18} /></a>
        </div></div>
        <small>&copy; 2025 Pemerintah Desa Sroyo, Kecamatan Jaten. Kabupaten Karanganyar. Hak Cipta Dilindungi Undang-Undang.</small>
      </div>
    </footer>
  );
}