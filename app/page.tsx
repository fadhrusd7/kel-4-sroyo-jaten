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

const documents = [
  "Profil Desa Sroyo belum dipublikasikan",
  "Laporan realisasi APBDes belum dipublikasikan",
];

function Icon({ name, alt = "" }: { name: IconName; alt?: string }) {
  return <Image className="icon" src={`/icon/${name}.svg`} alt={alt} width={24} height={24} />;
}

export default function Home() {
  return (
    <main>
      <SiteHeader page="home" />

      <section id="beranda" className="hero">
        <Image src="/figma/hero.png" alt="Ilustrasi halaman Desa Sroyo" fill priority sizes="100vw" />
        <div className="heroShade" />
        <div className="heroContent">
          <p>Portal Informasi Warga</p>
          <h1>Selamat Datang di<br />Website Resmi Desa Sroyo</h1>
        </div>
      </section>

      <section className="services section">
        <div className="sectionTitle floatingTitle"><h2>Layanan Desa Sroyo</h2></div>
        <div className="servicePanel">
          {services.map((service) => <button key={service.name} type="button" className="serviceCard" disabled aria-label={`${service.name} (belum tersedia)`}><Icon name={service.icon} /><span>{service.name}</span></button>)}
        </div>
      </section>

      <section id="profil" className="about section">
        <Image src="/figma/village-building.png" alt="Bangunan Desa Sroyo" width={527} height={379} />
        <div>
          <h2>Tentang Desa</h2>
          <p>Halaman ini disiapkan sebagai pusat informasi Desa Sroyo. Data profil, wilayah, dan kependudukan akan ditampilkan setelah diverifikasi dari sumber resmi desa.</p>
          <a className="primaryButton" href="/profil">Baca Selengkapnya</a>
        </div>
      </section>

      <section className="awards section">
        <div className="sectionTitle"><Icon name="trophy" /><h2>Penghargaan</h2></div>
        <p className="emptyState">Belum ada informasi penghargaan yang dipublikasikan.</p>
      </section>

      <section className="downloads section">
        <div className="sectionTitle"><Icon name="download" /><h2>Dokumen Publik</h2></div>
        <div className="downloadGrid">{documents.map((item) => <div key={item} className="downloadItem" role="status"><span>{item}</span><Icon name="download" alt="" /></div>)}</div>
      </section>

      <section className="news section">
        <div className="sectionTitle"><Icon name="news" /><h2>Berita &amp; Pengumuman</h2></div>
        <article className="newsCard emptyState"><small>INFORMASI PUBLIK</small><h3>Belum ada berita yang dipublikasikan</h3><p>Berita dan pengumuman akan ditampilkan setelah tersedia informasi yang telah diverifikasi.</p></article>
      </section>

      <section className="video section">
        <div className="sectionTitle"><Icon name="video" /><h2>Video Informasi</h2></div>
        <div className="videoLayout"><div className="videoThumb videoUnavailable"><Icon name="video" alt="" /><span>Video belum tersedia</span></div><div><h3>Video informasi belum dipublikasikan</h3><p>Belum ada video resmi yang dapat ditayangkan pada halaman ini. Tautan video akan ditambahkan setelah materi dan sumbernya diverifikasi.</p></div></div>
      </section>

      <SiteFooter />
    </main>
  );
}
