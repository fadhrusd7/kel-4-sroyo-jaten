import Image from "next/image";

type IconName =
  | "birth"
  | "resident"
  | "business"
  | "trophy"
  | "download"
  | "news"
  | "video"
  | "play"
  | "youtube"
  | "instagram"
  | "x";

const services: { icon: IconName; name: string }[] = [
  { icon: "birth", name: "Layanan Kelahiran" },
  { icon: "resident", name: "Layanan Kependudukan & KTP" },
  { icon: "business", name: "Surat Keterangan Usaha / Domisili" },
  { icon: "birth", name: "Layanan Kematian" },
  { icon: "resident", name: "Layanan Nikah" },
];

const downloads = [
  "Buku Profil Desa Sroyo Tahun 2026",
  "Laporan Realisasi APBDes Sroyo 2024",
];

function Icon({ name, alt = "" }: { name: IconName; alt?: string }) {
  return <Image className="icon" src={`/icon/${name}.svg`} alt={alt} width={24} height={24} />;
}

export default function Home() {
  return (
    <main>
      <header className="topbar">
        <a className="brand" href="#beranda" aria-label="Beranda Desa Sroyo">
          <Image src="/figma/crest.png" alt="Lambang Kabupaten Karanganyar" width={48} height={58} priority />
          <span>Pemerintah Kota Karanganyar<br />Kecamatan Jaten<br />Desa Sroyo</span>
        </a>
        <nav className="nav" aria-label="Navigasi utama">
          <a className="active" href="#beranda">Beranda</a>
          <a href="#profil">Profil</a>
          <a href="#kontak">Kontak</a>
        </nav>
      </header>

      <section id="beranda" className="hero">
        <Image src="/figma/hero.png" alt="Pemandangan Desa Sroyo" fill priority sizes="100vw" />
        <div className="heroShade" />
        <div className="heroContent">
          <p>Portal Informasi Warga</p>
          <h1>Selamat Datang di<br />Website Resmi Desa Sroyo</h1>
        </div>
      </section>

      <section className="services section">
        <div className="sectionTitle floatingTitle"><h2>Layanan Desa Sroyo</h2></div>
        <div className="servicePanel">
          {services.map((service) => <a key={service.name} href="#kontak" className="serviceCard"><Icon name={service.icon} /><span>{service.name}</span></a>)}
        </div>
      </section>

      <section id="profil" className="about section">
        <Image src="/figma/village-building.png" alt="Bangunan Desa Sroyo" width={527} height={379} />
        <div>
          <h2>Tentang Desa</h2>
          <p>Desa Sroyo merupakan salah satu desa di Kecamatan Jaten dan dalam perbandingan tiga desa pada laporan ini disebut sebagai desa dengan wilayah terluas. Secara administratif, Sroyo terdiri atas 6 dusun, 10 RW, dan 58 RT pada tahun 2024.</p>
          <a className="primaryButton" href="#footer">Baca Selengkapnya</a>
        </div>
      </section>

      <section className="awards section">
        <div className="sectionTitle"><Icon name="trophy" /><h2>Penghargaan</h2></div>
        <div className="awardGrid">{[1, 2, 3].map((award) => <article key={award} className="award"><Icon name="trophy" /><span>Penghargaan 1234</span></article>)}</div>
      </section>

      <section className="downloads section">
        <div className="sectionTitle"><Icon name="download" /><h2>Profil Desa</h2></div>
        <div className="downloadGrid">{downloads.map((item) => <a key={item} href="#footer" className="downloadItem"><span>{item}</span><Icon name="download" alt="Unduh" /></a>)}</div>
      </section>

      <section className="news section">
        <div className="sectionTitle"><Icon name="news" /><h2>Berita Terkini</h2></div>
        <div className="newsGrid">{[1, 2, 3].map((article) => <article className="newsCard" key={article}><div className="photo"><Image src="/figma/news-meeting.png" alt="Rapat koordinasi perangkat Desa Sroyo" fill sizes="(max-width: 700px) 100vw, 33vw" /></div><small>Pemerintahan</small><h3>PemDes Rapat Koordinasi Pembangunan Desa</h3><p>Desa Sroyo melaksanakan musyawarah rencana kerja pembangunan desa untuk kesejahteraan warga.</p><a href="#footer">Lihat Detail</a></article>)}</div>
      </section>

      <section className="video section">
        <div className="sectionTitle"><Icon name="video" /><h2>Video Informasi</h2></div>
        <div className="videoLayout"><div className="videoThumb"><Image src="/figma/video-event.png" alt="Pembukaan KopDes dan pameran UMKM" fill sizes="(max-width: 700px) 100vw, 50vw" /><span><Icon name="play" alt="Putar video" /></span></div><div><h3>Pembukaan KopDes & Pameran UMKM Desa</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quo eiusmod tempor incididunt ut labore et dolore magna aliqua.</p><a className="primaryButton" href="#footer">Lihat Video</a></div></div>
      </section>

      <footer id="footer"><div className="footerTop"><div className="footerBrand"><a className="footerIdentity" href="#beranda"><Image src="/figma/crest.png" alt="Lambang Kabupaten Karanganyar" width={40} height={48} /><div className="footerIdentityInfo"><strong>Pemerintah Kota Karanganyar</strong><span>Kecamatan Jaten</span><span>Desa Sroyo</span></div></a><p>Portal informasi resmi Pemerintah Desa Sroyo untuk pelayanan dan keterbukaan informasi warga.</p><div className="contactDetail"><span>Jl. Raya Solo - Sragen KM 7.5, Desa Sroyo</span><span>Senin - Jumat · 08.00 - 15.00 WIB</span><span>+62 812-3456-7890</span></div></div><div><h4>Navigasi Utama</h4><a href="#beranda">Beranda</a><a href="#profil">Profil Wilayah</a><a href="#beranda">Layanan Surat Online</a><a href="#beranda">Transparansi APBDes</a></div><div id="kontak"><h4>Hubungi Kami</h4><a href="mailto:desa-sroyo@karanganyarkab.go.id">desa-sroyo@karanganyarkab.go.id</a><a href="tel:+6281234567890">+62 812-3456-7890</a><a href="#kontak">Pos Pengaduan Warga</a></div></div><div className="footerBottom"><div><p>Terhubung Bersama Kami</p><div className="socialLinks"><a href="https://youtube.com" aria-label="YouTube"><Icon name="youtube" alt="" /></a><a href="https://instagram.com" aria-label="Instagram"><Icon name="instagram" alt="" /></a><a href="https://x.com" aria-label="X"><Icon name="x" alt="" /></a></div></div><small>© 2025 Pemerintah Desa Sroyo, Kecamatan Jaten. Kabupaten Karanganyar. Hak Cipta Dilindungi Undang-Undang.</small></div></footer>
    </main>
  );
}
