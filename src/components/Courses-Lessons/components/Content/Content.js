import ReactPlayer from "react-player";
import "./Content.scss";

const Content = () => {
  return (
    <section className="course__content">
      <div className="course__video mb-2">
        <ReactPlayer
          url={"https://www.youtube.com/watch?v=ysz5S6PUM-U"}
          controls={true}
          playing={true}
          width={"100%"}
          height={400}
        />
      </div>
      <div className="course__details">
        <header className="my-4">
          <h4>هذا هو الدرس الأول من المنحة الأولي</h4>
        </header>
        <p>
          لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو
          أيوسمود تيمبور أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت
          انيم أد مينيم فينايم,كيواس نوستريد أكسير سيتاشن يللأمكو لابورأس نيسي
          يت أليكيوب أكس أيا كوممودو كونسيكيوات . ديواس أيوتي أريري دولار إن
          ريبريهينديرأيت فوليوبتاتي فيلايت أيسسي كايلليوم دولار أيو فيجايت نيولا
          باراياتيور. أيكسسيبتيور ساينت أوككايكات كيوبايداتات نون بروايدينت
          ,سيونت ان كيولبا كيو أوفيسيا ديسيريونتموليت انيم أيدي ايست لابوريوم
        </p>
      </div>
    </section>
  );
};

export default Content;
