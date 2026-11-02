import Image from "next/image";
import Link from "next/link";

type SiteHeaderProps = { page: "home" | "profile" };

export function SiteHeader({ page }: SiteHeaderProps) {
  return (
    <header className="topbar">
      <Link className="brand" href="/" aria-label="Beranda Desa Sroyo">
        <Image src="/figma/crest.png" alt="Lambang Kabupaten Karanganyar" width={48} height={58} priority />
        <span>Pemerintah Desa<br />Kecamatan Jaten<br />Desa Sroyo</span>
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
            <div className="footerIdentityInfo"><strong>Pemerintah Desa</strong><span>Kecamatan Jaten</span><span>Desa Sroyo</span></div>
          </Link>
          <p>Portal informasi Desa Sroyo. Informasi pada halaman ini hanya ditampilkan setelah tersedia sumber yang dapat diverifikasi.</p>
          <div className="contactDetail"><span>Kontak dan jam layanan belum dipublikasikan.</span></div>
        </div>
        <div><h4>Navigasi Utama</h4><Link href="/">Beranda</Link><Link href="/profil">Profil Wilayah</Link></div>
        <div id="kontak"><h4>Hubungi Kami</h4><span>Informasi kontak resmi belum tersedia.</span></div>
      </div>
      <div className="footerBottom">
        <div><p>Media Sosial</p><div className="socialLinks"><a href="https://www.instagram.com/pemdes_sroyo/" target="_blank" rel="noreferrer" aria-label="Instagram Desa Sroyo"><Image className="icon" src="/icon/instagram.svg" alt="" width={18} height={18} /></a></div></div>
        <small>Desa Sroyo, Kecamatan Jaten, Kabupaten Karanganyar.</small>
      </div>
    </footer>
  );
}
