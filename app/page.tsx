import Image from "next/image";
import { SiteFooter, SiteHeader } from "../components/site-chrome";

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
      <SiteHeader page="home" />

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
          <a className="primaryButton" href="/profil">Baca Selengkapnya</a>
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

      <SiteFooter />
    </main>
  );
}
