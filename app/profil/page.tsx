import type { Metadata } from "next";
import Image from "next/image";
import { SiteFooter, SiteHeader } from "../../components/site-chrome";

export const metadata: Metadata = { title: "Profil Desa Sroyo" };

const missions = [
  "Menyelenggarakan pemerintahan desa yang bersih, tertib dan bebas KKN.",
  "Pemerataan pembangunan infrastruktur demi menunjang ekonomi masyarakat.",
  "Peningkatan Pendapatan Asli Desa (PAD) Sroyo melalui pengembangan BUMDES.",
  "Menciptakan inovasi Desa Sroyo guna meningkatkan kreativitas untuk menunjang perekonomian.",
  "Penyelamatan aset-aset desa untuk kemakmuran masyarakat Desa Sroyo.",
  "Menyelenggarakan kegiatan agama, sosial, budaya dan olahraga dalam rangka memperkokoh persatuan bangsa.",
];

const demographics = [
  ["01", "Jumlah Dusun", "6", "Dusun", "1. Kasak\n2. Pulosari\n3. Tundungan\n4. Kanten\n5. Ngledok\n6. Sroyo"],
  ["02", "Rukun Warga (RW)", "10", "RW", "Tersebar aktif di seluruh dusun"],
  ["03", "Rukun Tetangga (RT)", "58", "RT", "Unit koordinasi warga paling hulu"],
  ["04", "Jumlah Penduduk Total", "10.470", "Jiwa", "Data mutasi terintegrasi semester II 2024"],
  ["05", "Penduduk Laki-laki", "5.188", "Jiwa", "49,55% dari total populasi desa"],
  ["06", "Penduduk Perempuan", "5.282", "Jiwa", "50,45% (+94 jiwa di atas jumlah laki-laki)"],
  ["07", "Kepadatan Penduduk", "2.277", "jiwa/km\u00B2", "Persebaran hunian asri & fasilitas umum"],
];

const staff = [
  ["EKO MARWANTO, S.Sos.", "SEKRETARIS DESA", "Koordinator Administrasi Desa"],
  ["WAHID MUSTOFA", "KAUR TATA USAHA & UMUM", "Surat, Aset & Arsip Desa"],
  ["BUDI SANTOSO", "KAUR KEUANGAN", "Bendahara & Pengelolaan APBDes"],
  ["NGATMIN", "KAUR PERENCANAAN", "RPJMDes & RKPDes"],
  ["MOH NOER FATONI", "KASI PEMERINTAHAN", "Pembinaan ketertiban, batas desa & data kependudukan"],
  ["SUWARTO", "KASI KESEJAHTERAAN", "Pembangunan infrastruktur, bansos & pembinaan warga"],
  ["DIDIK NUGROHO", "KASI PELAYANAN", "Layanan surat menyurat, nikah, perizinan & keagamaan"],
];



export default function ProfilPage() {
  return <main className="figmaProfile">
    <SiteHeader page="profile" />

    <section className="historyHero"><Image src="/figma/profile-history.png" alt="Pemandangan Desa Sroyo" fill priority sizes="100vw" /><div className="historyShade" /><div className="historyCard"><h1>Sejarah Desa Sroyo</h1><p>Desa Sroyo berawal dari perjalanan R.A. Ayu Aminah Lembah Manah, istri Sunan Giri dari Gresik, yang hendak mengunjungi putranya, Syekh Wasi Bagna Timur atau Kyai Ageng Gribig, di Jatinom, Klaten. Dalam perjalanan, beliau bersama para pengawal beristirahat dan mandi di Sendang Sroyo yang berada di kawasan hutan. Setelah beristirahat, R.A. Ayu Aminah Lembah Manah jatuh sakit dan wafat di tempat tersebut. Atas keputusan para pengawal, beliau kemudian dimakamkan di kawasan Wana Sroyo, dan peristiwa tersebut dilaporkan kepada pihak keluarga di Gresik. Seiring berjalannya waktu, makam beliau dikenal sebagai makam tokoh yang dihormati. Pada masa Sultan Agung Mataram, kawasan Wana Sroyo mulai dibuka dan dijadikan permukiman. Penduduk yang semakin bertambah kemudian membentuk Dusun Sroyo, yang berkembang menjadi Desa Sroyo hingga saat ini.</p></div></section>

    <section className="vmSection"><h2>Visi</h2><div className="winePanel quote">&ldquo;Terwujudnya Masyarakat Desa Sroyo yang Beragama dan Berbudaya Menuju Keadilan dan Kesejahteraan Berlandaskan Semangat Gotong Royong.&rdquo;</div><h2>Misi</h2><div className="winePanel missionPanel"><ol>{missions.map((mission) => <li key={mission}>{mission}</li>)}</ol></div></section>

    <section className="profileBlock"><div className="ribbonTitle">Peta Administrasi Desa Sroyo</div><div className="mapFrame"><Image src="/figma/administrative-map.png" alt="Peta administrasi Desa Sroyo" width={1755} height={1240} /></div></section>

    <section className="profileBlock orgBlock"><div className="ribbonTitle">Struktur Organisasi</div><div className="orgCanvas"><Image src="/strutur-organisasi.png" alt="Bagan struktur organisasi Desa Sroyo" width={876} height={626} /></div></section>

    <section id="demografi" className="demography"><div className="demographyInner"><h2>Wilayah & Demografi Kependudukan</h2><h3>Distribusi Berdasarkan Jenis Kelamin</h3><div className="genderCards"><article><p>Penduduk Laki-Laki</p><strong>5.188 <small>Jiwa</small></strong><div><span>Persentase Penduduk</span><b>49,55%</b></div><i><em /></i></article><article><p>Penduduk Perempuan</p><strong>5.282 <small>Jiwa</small></strong><div><span>Persentase Penduduk</span><b>50,45%</b></div><i><em /></i></article></div><h3 className="matrixTitle">Matriks Indikator Kependudukan</h3><div className="tableWrap"><table><thead><tr><th>No</th><th>Indikator Administratif / Demografi</th><th>Nilai Parameter</th><th>Satuan</th><th>Keterangan</th></tr></thead><tbody>{demographics.map((row) => <tr className={row[0] === "04" ? "populationTotal" : undefined} key={row[0]}>{row.map((cell) => <td key={cell}>{cell}</td>)}</tr>)}</tbody></table></div></div></section>

    <section id="layanan" className="healthSection">
      <div className="healthSectionHeading"><h2>LAYANAN PUBLIK &amp; KESEHATAN</h2></div><div className="healthHeading"><h2>Kesehatan dan Kesejahteraan Masyarakat</h2><p className="sectionLead">Cakupan posyandu komunitas, tenaga medis terpadu, dan program pemberdayaan keluarga.</p></div>
      <div className="healthInner">
        <div className="healthKpis">
          <article><div className="healthKpiLabel"><span>FASILITAS PKD</span><i aria-hidden="true">+</i></div><div className="healthKpiValue"><b>1</b><small>Unit</small></div><p>Poliklinik Kesehatan Desa Sroyo aktif beroperasi</p></article>
          <article><div className="healthKpiLabel"><span>APOTEK DESA</span><i aria-hidden="true">+</i></div><div className="healthKpiValue"><b>2</b><small>Unit</small></div><p>Distribusi farmasi & obat-obatan berizin</p></article>
          <article><div className="healthKpiLabel"><span>POSYANDU AKTIF</span><i aria-hidden="true">+</i></div><div className="healthKpiValue"><b>22</b><small>Pos</small></div><p>Tersebar di seluruh kebayanan dan RW</p></article>
          <article><div className="healthKpiLabel"><span>KADER KESEHATAN</span><i aria-hidden="true">+</i></div><div className="healthKpiValue"><b>79</b><small>Orang</small></div><p>61 Posyandu + 18 Posbindu PTM</p></article>
          <article><div className="healthKpiLabel"><span>CAKUPAN KB AKTIF</span><i aria-hidden="true">+</i></div><div className="healthKpiValue gold"><b>66,13%</b></div><p>1.113 dari 1.683 Pasangan Usia Subur</p></article>
        </div>
        <div className="healthCards">
          <article className="posyanduCard">
            <header><div><h3>Layanan Posyandu & Skrining Komunitas</h3><p>22 Pos Terpadu & 79 Kader Terlatih</p></div><span className="healthTag">Total 22 Pos</span></header>
            <div className="posyanduGrid">
              <div><small>POSYANDU BALITA</small><strong>7 Pos</strong><p>Pemantauan gizi & imunisasi</p></div>
              <div><small>POSYANDU LANSIA</small><strong>7 Pos</strong><p>Cek tensi, gula & senam lansia</p></div>
              <div><small>POSYANDU REMAJA</small><strong>4 Pos</strong><p>Konseling gizi & reproduksi</p></div>
              <div><small>POSBINDU PTM</small><strong>4 Pos</strong><p>Skrining penyakit tidak menular</p></div>
            </div>
            <div className="staffSummary"><strong>Distribusi Tenaga Kader Desa Sroyo:</strong><span>61 Kader Posyandu</span><span>18 Kader Posbindu PTM</span></div>
          </article>
          <article className="kbCard">
            <header><div><h3>Program Keluarga Berencana</h3><p>Keluarga Berkualitas & Sejahtera</p></div><span className="healthTag goldTag">66,13% Capaian</span></header>
            <div className="kbOverview"><div><small>PASANGAN USIA SUBUR (PUS)</small><strong>1.683</strong></div><div><small>AKSEPTOR KB AKTIF</small><strong>1.113</strong></div></div>
            <div className="kbProgress"><span style={{ width: "66.13%" }} /></div>
            <div className="kbProgressLabels"><span>0 Aseptor</span><strong>66,13% Pasangan Terdaftar</strong><span>Target 100%</span></div>
            <div className="kbMethod"><strong>Metode Pelayanan Kontrasepsi:</strong><p>Pelayanan suntik, pil KB, IUD, implan, dan MOW difasilitasi melalui kemitraan bidan desa, PKD, serta rujukan Puskesmas Jaten I secara teratur tiap pekan.</p></div>
            <small className="kbSource">Sumber: Data KB BKKBN & Register Kader Desa Sroyo 2024</small>
          </article>
        </div>
      </div>
    </section>
    <SiteFooter />
  </main>;
}
