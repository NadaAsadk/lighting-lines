import React from "react";
import fiber from "/fiber.svg";
import field from "/field.svg";
import maintenance from "/network.svg";
import camera from "/camera.svg";
import energy from "/energy.svg";
import supply from "/supply.svg";
import project from "/project.svg";
import team from "/team.png";
import jawwal from "/jawwal.webp";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import iconUrl from "leaflet/dist/images/marker-icon.png";
import iconRetinaUrl from "leaflet/dist/images/marker-icon-2x.png";
import shadowUrl from "leaflet/dist/images/marker-shadow.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import { useMediaQuery, useTheme } from "@mui/material";

L.Icon.Default.mergeOptions({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
});

function Home() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const isMedScreen = useMediaQuery(theme.breakpoints.down("lg"));
  const position = [32.302143445986665, 35.1238771758256];

  return (
    <div className="w-full flex justify-center flex-col">
      <section id="Home" className="w-full hero py-10 lg:py-30">
        <div className="flex flex-col gap-6 z-40 items-center">
          <p className="txt3 text-xl md:text-3xl lg:text-4xl  w-2/3 lg:w-full text-center font-bold">
            حلول اتصالات ومشاريع بنية تحتية تنفذ بمعايير عالمية وكفاءة محلية
          </p>
          <div className="flex gap-3 w-full lg:w-1/2 text-xs lg:text-md justify-center font-bold">
            <a
              href="#Services"
              className="bg3 txt2 p-3 rounded-3xl txt1 w-1/3 text-center hover:scale-105 transition-transform"
            >
              اكتشف خدماتنا
            </a>
            <a
              href="#About"
              className="bg2 txt3 p-3 rounded-3xl txt1 w-1/3 text-center hover:scale-105 transition-transform"
            >
              من نحن
            </a>
          </div>
        </div>
        <span className="absolute top-0 right-0 h-full w-full opacity-20 bg1 z-0"></span>
      </section>

      <section id="Services" className="flex justify-center py-10">
        <div className="container">
          <h2 className="txt2 text-4xl font-bold text-center my-12">خدماتنا</h2>
          <Swiper
            modules={[Autoplay]}
            className="h-[350px]"
            spaceBetween={10}
            slidesPerView={isSmallScreen ? 2 : isMedScreen ? 3 : 5}
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide className="">
              <div className="card">
                <div className="bg">
                  <img src={fiber} />
                  <p className="text-center">
                    تنفيذ وتمديد شبكات الألياف الضوئية (FTTH / FTTX)
                  </p>
                </div>
                <div className="blob"></div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="">
              <div className="card">
                <div className="bg">
                  <img src={field} />
                  <p className="text-center">
                    أعمال الحفر والتركيب والتوصيل الميداني
                  </p>
                </div>
                <div className="blob"></div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="">
              <div className="card">
                <div className="bg">
                  <img src={maintenance} />
                  <p className="text-center">صيانة وتشغيل شبكات الاتصالات</p>
                </div>
                <div className="blob"></div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="">
              <div className="card">
                <div className="bg">
                  <img src={camera} />
                  <p className="text-center">
                    تركيب أنظمة الكاميرات والمراقبة والتحكم
                  </p>
                </div>
                <div className="blob"></div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="">
              <div className="card">
                <div className="bg">
                  <img src={energy} />
                  <p className="text-center">
                    حلول الطاقة والتجهيزات الكهربائية لمواقع الاتصالات
                  </p>
                </div>
                <div className="blob"></div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="">
              <div className="card">
                <div className="bg">
                  <img src={supply} />
                  <p className="text-center">توريد المواد والمعدات الفنية</p>
                </div>
                <div className="blob"></div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="">
              <div className="card">
                <div className="bg">
                  <img src={project} />
                  <p className="text-center">إدارة المشاريع والإشراف الفني</p>
                </div>
                <div className="blob"></div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      <section id="About" className="flex justify-center py-16 bg-gray-50">
        <div className="container flex flex-col gap-12">
          <h2 className="txt2 text-4xl font-bold text-center ">من نحن</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="relative group overflow-hidden rounded-2xl shadow-lg">
              <img
                src={team}
                alt="من حفل افتتاح شركة لايتينغ لاينز"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <p className="text-white text-xl font-medium">
                  من حفل افتتاح شركة لايتينغ لاينز
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-8 text-right">
              <p className="text-xl leading-relaxed text-gray-700">
                <span className="txt2 font-bold text-gray-900">
                  شركة لايتينغ لاينز
                </span>{" "}
                للمقاولات وخدمات الاتصالات هي شركة فلسطينية متخصصة في تنفيذ
                وتشغيل وصيانة مشاريع الاتصالات والبنية التحتية. تأسست في بلدة
                عنبتا – طولكرم، وتعمل بخبرة فنية وإدارية متراكمة في مجالات تمديد
                شبكات الألياف الضوئية، وتركيب أنظمة الاتصالات، والصيانة الدورية
                للمواقع الميدانية. تلتزم الشركة بمعايير الجودة والسلامة المهنية،
                وتسعى لتوسيع نشاطها لتكون شريكًا استراتيجيًا موثوقًا لشركات
                الاتصالات والمؤسسات الحكومية والخاصة.
              </p>

              <div className="about-card">
                <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                  الرؤية
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  أن نكون من أبرز الشركات الفلسطينية في مجال تنفيذ مشاريع
                  الاتصالات والبنية التحتية، عبر تقديم خدمات موثوقة تواكب التطور
                  التقني وتلبي تطلعات شركائنا وعملائنا.
                </p>
              </div>

              <div className="about-card">
                <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                  الرسالة
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  نعمل على تنفيذ مشاريع الاتصالات والمقاولات بأعلى مستويات
                  الجودة والمهنية، مستندين إلى كوادر فنية مؤهلة، وأنظمة إدارة
                  فعّالة، وشراكات استراتيجية تضمن الاستدامة والتميز.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="Partners" className="flex justify-center py-16 bg-white">
        <div className="container flex flex-col gap-8 text-center">
          <h2 className="txt2 text-4xl font-bold text-gray-800">شركاؤنا</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            نفخر بشراكاتنا مع نخبة من شركات الاتصالات والمقاولات المحلية
            والإقليمية، إلى جانب مؤسسات داعمة في مجالات التكنولوجيا والبنية
            التحتية.
          </p>
          <div className="flex justify-center items-center gap-10 flex-wrap mt-6 opacity-80">
            <div className=" p-4 bg-gray-100 rounded-xl flex items-center justify-center shadow-sm">
              <img src={jawwal} />
            </div>
          </div>
        </div>
      </section>

      <section id="Team" className="flex justify-center py-16 bg-gray-50">
        <div className="container flex flex-col gap-8 text-center">
          <h2 className="txt2 text-4xl font-bold text-gray-800">فريق العمل</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            يتكوّن فريقنا من مهندسين وفنيين ذوي خبرة عالية في مجالات الاتصالات
            والمشاريع الميدانية، مدعومين بإدارة فنية وإدارية تتابع التفاصيل
            لضمان تنفيذ الأعمال بجودة وكفاءة.
          </p>
        </div>
      </section>

      <section id="FAQ" className="flex justify-center py-16 bg-white">
        <div className="container flex flex-col gap-10">
          <h2 className="txt2 text-4xl font-bold text-center text-gray-800">
            الأسئلة الشائعة
          </h2>
          <div className="max-w-3xl mx-auto flex flex-col gap-6">
            <details className="bg-gray-50 p-5 rounded-xl shadow-sm cursor-pointer">
              <summary className="text-lg font-semibold text-gray-800">
                هل تقدم الشركة خدماتها للأفراد أم للشركات فقط؟
              </summary>
              <p className="text-gray-600 mt-3">
                تقدم الشركة خدماتها بشكل رئيسي لشركات الاتصالات والمؤسسات، مع
                إمكانية تنفيذ مشاريع محددة للأفراد ضمن نطاق معين.
              </p>
            </details>

            <details className="bg-gray-50 p-5 rounded-xl shadow-sm cursor-pointer">
              <summary className="text-lg font-semibold text-gray-800">
                هل تعمل الشركة في جميع محافظات الضفة الغربية؟
              </summary>
              <p className="text-gray-600 mt-3">
                نعم، لدينا فرق ميدانية تغطي مختلف المناطق حسب طبيعة المشروع
                وجدوله الزمني.
              </p>
            </details>

            <details className="bg-gray-50 p-5 rounded-xl shadow-sm cursor-pointer">
              <summary className="text-lg font-semibold text-gray-800">
                هل يمكن التعاون في مشاريع مشتركة؟
              </summary>
              <p className="text-gray-600 mt-3">
                بالتأكيد، نرحب بعلاقات الشراكة والتعاون مع المقاولين والموردين
                المحليين والإقليميين.
              </p>
            </details>
          </div>
        </div>
      </section>

      <section id="Contact" className="flex justify-center py-16 bg2">
        <div className="container flex flex-col gap-8 text-center">
          <h2 className="txt3 text-4xl font-bold">معلومات التواصل</h2>

          <div className="flex justify-around flex-col lg:flex-row gap-10 text-right">
            <div className="txt3 flex flex-col gap-3 justify-start">
              <h3 className="text-2xl font-bold ">تفاصيل التواصل</h3>
              <p className="text-md lg:text-lg">
                العنوان: عنبتا – طولكرم – فلسطين
              </p>
              <p className="text-md lg:text-lg">
                الهاتف:
                <a
                  href="tel:+970599579901"
                  className="text-blue-600 hover:underline"
                  dir="ltr"
                >
                  {" "}
                  0599579901
                </a>
              </p>
              <p className="text-md lg:text-lg">
                البريد الإلكتروني:
                <a
                  href="mailto:info@lightinglines.ps"
                  className="text-blue-600 hover:underline"
                >
                  {" "}
                  info@lightinglines.ps
                </a>
              </p>
              <p className="text-md lg:text-lg">
                أوقات العمل: من الأحد إلى الخميس – 8:00 صباحًا حتى 4:00 مساءً
              </p>
            </div>

            <div className="txt3 flex flex-col gap-3 border-t-2 lg:border-0 pt-4">
              <h3 className="text-2xl font-bold">مقر الشركة</h3>
              <p className="text-md lg:text-lg">
                المقر الرئيسي: عنبتا – بالقرب من دوار الشرطة – مبنى لايتينغ
                لاينز
              </p>
                <MapContainer
                  center={position}
                  zoom={15}
                  scrollWheelZoom={true}
                  className="map-container"
                >
                  <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  <Marker position={position}>
                    <Popup>شركة لايتينغ لاينز</Popup>
                  </Marker>
                </MapContainer>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
