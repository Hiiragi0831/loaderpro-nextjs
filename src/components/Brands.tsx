"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

export const Brands = () => {
  const data = [
    {
      title: "sany",
      href: `${process.env.NEXT_PUBLIC_HOST}/brand/sany-km3-289`,
    },
    {
      title: "anderson",
      href: `${process.env.NEXT_PUBLIC_HOST}/brand/sanderson-904-721`,
    },
    {
      title: "atlet",
      href: `${process.env.NEXT_PUBLIC_HOST}/brand/atlet-506-605`,
    },
    {
      title: "baumann",
      href: `${process.env.NEXT_PUBLIC_HOST}/brand/baumann-a97-455`,
    },
    {
      title: "bobcat",
      href: `${process.env.NEXT_PUBLIC_HOST}/brand/bobcat-274-1154`,
    },
    {
      title: "bosch",
      href: `${process.env.NEXT_PUBLIC_HOST}/brand/bosch-027-517`,
    },
    {
      title: "bt",
      href: `${process.env.NEXT_PUBLIC_HOST}/brand/bt-268-1192`,
    },
    {
      title: "caterpillar",
      href: `${process.env.NEXT_PUBLIC_HOST}/brand/caterpillar-009-508`,
    },
    {
      title: "clark",
      href: `${process.env.NEXT_PUBLIC_HOST}/brand/clark-007-507`,
    },
    {
      title: "combilift",
      href: `${process.env.NEXT_PUBLIC_HOST}/brand/combilift-ay7-1282`,
    },
    {
      title: "crown",
      href: `${process.env.NEXT_PUBLIC_HOST}/brand/crown-002-504`,
    },
    {
      title: "cummnis",
      href: `${process.env.NEXT_PUBLIC_HOST}/brand/cummins-183-1433`,
    },
    {
      title: "cvs_ferrrari",
      href: `${process.env.NEXT_PUBLIC_HOST}/brand/cvs-ferrari-p14-145`,
    },
    {
      title: "dalian",
      href: `${process.env.NEXT_PUBLIC_HOST}/brand/dalian-ej2-1084`,
    },
    {
      title: "deutz",
      href: `${process.env.NEXT_PUBLIC_HOST}/brand/deutz-380-1336`,
    },
    {
      title: "donaldson",
      href: `${process.env.NEXT_PUBLIC_HOST}/brand/donaldson-073-530`,
    },
    {
      title: "doosan",
      href: `${process.env.NEXT_PUBLIC_HOST}/brand/daewoo-doosan-954-739`,
    },
    {
      title: "fantuzzi",
      href: `${process.env.NEXT_PUBLIC_HOST}/brand/fantuzzi-b71-17`,
    },
    {
      title: "hangcha",
      href: `${process.env.NEXT_PUBLIC_HOST}/brand/hangcha-forklift-dg5-1156`,
    },
    {
      title: "heli",
      href: `${process.env.NEXT_PUBLIC_HOST}/brand/heli-u88-170`,
    },
    {
      title: "hyster",
      href: `${process.env.NEXT_PUBLIC_HOST}/brand/hyster-001-503`,
    },
    {
      title: "hysterold",
      href: `${process.env.NEXT_PUBLIC_HOST}/brand/hyster-001-503`,
    },
    {
      title: "hyundai",
      href: `${process.env.NEXT_PUBLIC_HOST}/brand/hyundai-q72-68`,
    },
    {
      title: "impco",
      href: `${process.env.NEXT_PUBLIC_HOST}/brand/impco-014-1345`,
    },
    {
      title: "isuzu",
      href: `${process.env.NEXT_PUBLIC_HOST}/brand/isuzu-134-554`,
    },
    {
      title: "jac",
      href: `${process.env.NEXT_PUBLIC_HOST}/brand/jac-im5-1442`,
    },
    { title: "jcb", href: `${process.env.NEXT_PUBLIC_HOST}/brand/jcb-861-715` },
    {
      title: "jungheinrich",
      href: `${process.env.NEXT_PUBLIC_HOST}/brand/jungheinrich-269-1185`,
    },
    {
      title: "kalmar",
      href: `${process.env.NEXT_PUBLIC_HOST}/brand/kalmar-546-614`,
    },
    {
      title: "komatsu",
      href: `${process.env.NEXT_PUBLIC_HOST}/brand/komatsu-107-453`,
    },
    {
      title: "konecranes",
      href: `${process.env.NEXT_PUBLIC_HOST}/brand/konecranes-f11-1071`,
    },
    {
      title: "kubota",
      href: `${process.env.NEXT_PUBLIC_HOST}/brand/kubota-857-1291`,
    },
    {
      title: "linde",
      href: `${process.env.NEXT_PUBLIC_HOST}/brand/linde-400-591`,
    },
    {
      title: "loaderpro",
      href: `${process.env.NEXT_PUBLIC_HOST}/brand/loaderpro-1`,
    },
    {
      title: "lovato",
      href: `${process.env.NEXT_PUBLIC_HOST}/brand/lovato-g43-1398`,
    },
    {
      title: "manitou",
      href: `${process.env.NEXT_PUBLIC_HOST}/brand/manitou-261-1218`,
    },
    {
      title: "maximal",
      href: `${process.env.NEXT_PUBLIC_HOST}/brand/maximal-fc8-304`,
    },
    {
      title: "merlo",
      href: `${process.env.NEXT_PUBLIC_HOST}/brand/merlo-a24-765`,
    },
    {
      title: "mitsubishi",
      href: `${process.env.NEXT_PUBLIC_HOST}/brand/mitsubishi-272-1172`,
    },
    {
      title: "mustang",
      href: `${process.env.NEXT_PUBLIC_HOST}/brand/mustang-n91-172`,
    },
    {
      title: "nichiyu",
      href: `${process.env.NEXT_PUBLIC_HOST}/brand/nichiyu-469-595`,
    },
    {
      title: "nissan",
      href: `${process.env.NEXT_PUBLIC_HOST}/brand/nissan-057-428`,
    },
    {
      title: "noblelift",
      href: `${process.env.NEXT_PUBLIC_HOST}/brand/noblelift-ic8-1431`,
    },
    {
      title: "om_pimespo",
      href: `${process.env.NEXT_PUBLIC_HOST}/brand/om-pimespo-b41-1268`,
    },
    {
      title: "perkins",
      href: `${process.env.NEXT_PUBLIC_HOST}/brand/perkins-054-527`,
    },
    {
      title: "rader_vogel",
      href: `${process.env.NEXT_PUBLIC_HOST}/brand/rader-vogel-b38-1269`,
    },
    {
      title: "rema",
      href: `${process.env.NEXT_PUBLIC_HOST}/brand/rema-723-678`,
    },
    {
      title: "schaltbau",
      href: `${process.env.NEXT_PUBLIC_HOST}/brand/schaltbau-613-640`,
    },
    {
      title: "sennebogen",
      href: `${process.env.NEXT_PUBLIC_HOST}/brand/sennebogen-nx2-153`,
    },
    {
      title: "still",
      href: `${process.env.NEXT_PUBLIC_HOST}/brand/still-255-1302`,
    },
    { title: "tcm", href: `${process.env.NEXT_PUBLIC_HOST}/brand/tcm-140-557` },
    {
      title: "terberg",
      href: `${process.env.NEXT_PUBLIC_HOST}/brand/terberg-d21-833`,
    },
    {
      title: "terex",
      href: `${process.env.NEXT_PUBLIC_HOST}/brand/terex-f74-1042`,
    },
    {
      title: "toyota",
      href: `${process.env.NEXT_PUBLIC_HOST}/brand/toyota-058-502`,
    },
    {
      title: "tvh",
      href: `${process.env.NEXT_PUBLIC_HOST}/brand/tvh-tvh-1616`,
    },
    {
      title: "tvhold",
      href: `${process.env.NEXT_PUBLIC_HOST}/brand/tvh-tvh-1616`,
    },
    {
      title: "unicarriers",
      href: `${process.env.NEXT_PUBLIC_HOST}/brand/unicarriers-rn5-495`,
    },
    {
      title: "yale",
      href: `${process.env.NEXT_PUBLIC_HOST}/brand/yale-003-505`,
    },
    {
      title: "yanmar",
      href: `${process.env.NEXT_PUBLIC_HOST}/brand/yanmar-805-309`,
    },
  ];

  return (
    <section className="brands">
      <div className="container">
        <Swiper
          slidesPerView={2}
          autoplay={{ delay: 3000 }}
          modules={[Autoplay]}
          loop={true}
          breakpoints={{
            1024: {
              slidesPerView: 8,
            },
          }}
        >
          {data.map((brand, id) => {
            return (
              <SwiperSlide key={id}>
                <a className="brands__slide" href={brand.href}>
                  <picture>
                    <source srcSet={`/images/vendors/${brand.title}.png`} />
                    <img
                      src={`/images/vendors/${brand.title}.png`}
                      alt={brand.title}
                    />
                  </picture>
                </a>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};
