import { useState, useEffect } from "react"
import "~styles/globals.css"
import { Question, Heart, Lightning } from "@phosphor-icons/react"
import PlaylistGenerator from "~components/playlist-generator"
import { useVideoId } from "~hooks/use-video-id"
import { sendToBackground } from "@plasmohq/messaging"

const SplashScreen = () => (
  <div className="mt-6 flex flex-col gap-y-8">
    <p className="text-base text-subtle">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto quos
      totam voluptas.
    </p>
    <button
      type="button"
      className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-on-primary
       shadow-sm hover:bg-primary-accent focus-visible:outline focus-visible:outline-2
       focus-visible:outline-offset-2 ">
      Go To YouTube
    </button>
  </div>
)

const AppHeader = () => (
  <header className="mb-4 flex w-full items-center justify-between">
    <svg
      className="h-8 w-auto"
      viewBox="0 0 183 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M25.9915 32.7866V45.5243C25.9915 46.0127 25.7975 46.481 25.4522 46.8261C25.107 47.1714 24.6388 47.3654 24.1504 47.3654C23.6622 47.3654 23.1939 47.1714 22.8486 46.8261C22.5033 46.481 22.3093 46.0127 22.3093 45.5243V32.8042C22.822 33.1786 23.4365 33.3875 24.0711 33.4032C24.7628 33.423 25.4406 33.2054 25.9915 32.7866ZM41.6713 29.1045C41.2041 29.1045 40.7559 29.2902 40.4256 29.6205C40.0953 29.9508 39.9096 30.399 39.9096 30.8663V33.0861C39.9096 33.5745 40.1035 34.0428 40.4488 34.3879C40.794 34.7332 41.2623 34.9272 41.7506 34.9272C42.239 34.9272 42.7073 34.7332 43.0524 34.3879C43.3977 34.0428 43.5917 33.5745 43.5917 33.0861V30.9543C43.6054 30.7017 43.5646 30.4491 43.4719 30.2137C43.3792 29.9783 43.237 29.7655 43.0547 29.59C42.8725 29.4145 42.6546 29.2803 42.4161 29.1964C42.1773 29.1128 41.9233 29.0814 41.6713 29.1045ZM18.3101 37.6139C17.6761 37.5949 17.0624 37.3863 16.5483 37.0149V49.7878C16.5483 50.2785 16.7432 50.7491 17.0901 51.096C17.437 51.4428 17.9075 51.6377 18.3982 51.6377C18.8888 51.6377 19.3593 51.4428 19.7062 51.096C20.0532 50.7491 20.248 50.2785 20.248 49.7878V37.103C19.6727 37.4749 18.9939 37.6539 18.3101 37.6139ZM35.9279 25.2814C35.6892 25.2694 35.4507 25.3062 35.2266 25.3894C35.0026 25.4726 34.7979 25.6005 34.6247 25.7652C34.4517 25.9301 34.3141 26.1283 34.2201 26.348C34.1262 26.5677 34.0777 26.8043 34.0781 27.0432V36.8563C34.0781 37.347 34.2729 37.8176 34.6198 38.1645C34.9669 38.5113 35.4373 38.7062 35.9279 38.7062C36.4186 38.7062 36.8892 38.5113 37.2361 38.1645C37.5829 37.8176 37.7778 37.347 37.7778 36.8563V27.1665C37.7919 26.9123 37.7507 26.6581 37.6569 26.4213C37.5632 26.1845 37.4195 25.9708 37.2352 25.795C37.0509 25.6191 36.8308 25.4852 36.59 25.4028C36.3492 25.3202 36.0932 25.2907 35.8398 25.3166L35.9279 25.2814ZM30.0788 29.0516C29.4151 29.047 28.7693 28.8379 28.2289 28.4526V41.2608C28.2289 41.7514 28.4238 42.222 28.7707 42.5689C29.1178 42.9158 29.5881 43.1107 30.0788 43.1107C30.5695 43.1107 31.0399 42.9158 31.3869 42.5689C31.7338 42.222 31.9287 41.7514 31.9287 41.2608V28.4702C31.3698 28.8865 30.6875 29.1036 29.9907 29.0869L30.0788 29.0516ZM14.3108 38.8648V3.08292C14.3062 2.64675 14.1297 2.23006 13.8196 1.92328C13.5095 1.6165 13.0909 1.44444 12.6548 1.44446H12.2672C11.831 1.44444 11.4124 1.6165 11.1023 1.92328C10.7922 2.23006 10.6157 2.64675 10.6111 3.08292V38.8648C10.6111 39.304 10.7856 39.7252 11.0961 40.0358C11.4067 40.3464 11.8279 40.5208 12.2672 40.5208H12.6548C13.094 40.5208 13.5152 40.3464 13.8258 40.0358C14.1364 39.7252 14.3108 39.304 14.3108 38.8648ZM18.5039 36.2573H18.1163C17.6771 36.2573 17.2558 36.0829 16.9453 35.7723C16.6347 35.4617 16.4602 35.0405 16.4602 34.6012V7.34644C16.4649 6.91029 16.6414 6.49356 16.9514 6.18679C17.2615 5.88001 17.6801 5.70796 18.1163 5.70798H18.5039C18.9401 5.70796 19.3586 5.88001 19.6687 6.18679C19.9788 6.49356 20.1553 6.91029 20.16 7.34644V34.6365C20.16 35.0757 19.9855 35.4969 19.6749 35.8075C19.3643 36.1181 18.9431 36.2926 18.5039 36.2926V36.2573ZM24.3354 32.0643H23.9302C23.4957 32.0643 23.0789 31.8916 22.7716 31.5844C22.4644 31.2771 22.2917 30.8604 22.2917 30.4258V11.5747C22.2894 11.3581 22.3301 11.1431 22.4113 10.9423C22.4926 10.7415 22.6129 10.5588 22.7653 10.4048C22.9177 10.2507 23.0991 10.1285 23.2991 10.045C23.4991 9.96159 23.7135 9.91862 23.9302 9.91864H24.3354C24.7716 9.92329 25.1883 10.0998 25.495 10.4099C25.8019 10.72 25.9738 11.1385 25.9738 11.5747V30.4258C25.9738 30.8604 25.8012 31.2771 25.4939 31.5844C25.1867 31.8916 24.77 32.0643 24.3354 32.0643ZM30.1669 27.7479H29.7969C29.3607 27.7479 28.9421 27.5759 28.632 27.269C28.322 26.9623 28.1454 26.5457 28.1408 26.1094V15.9616C28.1264 15.7353 28.1585 15.5086 28.2353 15.2953C28.3119 15.0821 28.4317 14.8867 28.5869 14.7216C28.7421 14.5564 28.9296 14.4249 29.1378 14.3351C29.3459 14.2454 29.5702 14.1992 29.7969 14.1998H30.1845C30.6237 14.1998 31.045 14.3742 31.3556 14.6848C31.6662 14.9954 31.8406 15.4166 31.8406 15.8559V26.0742C31.8429 26.2932 31.8018 26.5104 31.7196 26.7134C31.6375 26.9163 31.5159 27.101 31.3617 27.2567C31.2078 27.4123 31.0245 27.5358 30.8223 27.6202C30.6202 27.7046 30.4035 27.7479 30.1845 27.7479H30.1669ZM36.016 23.9601H35.6284C35.1892 23.9601 34.768 23.7856 34.4574 23.475C34.1468 23.1644 33.9723 22.7432 33.9723 22.304V19.6789C33.9769 19.2427 34.1535 18.826 34.4635 18.5193C34.7736 18.2124 35.1922 18.0405 35.6284 18.0405H36.016C36.4522 18.0405 36.8708 18.2124 37.1809 18.5193C37.491 18.826 37.6675 19.2427 37.6721 19.6789V22.304C37.6721 22.7402 37.5001 23.1588 37.1932 23.4689C36.8865 23.779 36.4699 23.9555 36.0336 23.9601H36.016Z"
        className="fill-primary-9"
      />
      <path
        d="M65.1484 35H61.7969V21.5234H56.5117V18.5234H70.4336V21.5234H65.1484V35ZM79.2812 35.375C74.6992 35.375 72.1211 32.6211 72.1211 28.8125V18.5234H75.4727V28.8594C75.4727 30.875 76.8906 32.3633 79.2812 32.3633C81.6602 32.3633 83.0898 30.875 83.0898 28.8594V18.5234H86.4531V28.8125C86.4531 32.6211 83.8516 35.375 79.2812 35.375ZM93.3086 35H89.9688V18.5234H93.3086L101.805 29.6211V18.5234H105.168V35H101.805L93.3086 23.8789V35ZM118.48 35H108.766V18.5234H118.48V21.5234H112.129V25.1328H118.117V28.0508H112.129V31.9883H118.48V35Z"
        className="fill-neutral-12"
      />
      <path
        d="M130.031 35.2695C126.926 35.2695 124.828 33.5469 124.43 30.793L126.445 30.418C126.738 32.3633 128.402 33.3594 130.02 33.3594C131.93 33.3594 133.043 32.2227 133.043 30.8281C133.031 29.6328 132.562 28.7422 131.121 28.0391L128.109 26.4922C126.375 25.6133 125.145 24.5117 125.145 22.4375C125.145 20.1641 126.902 18.2539 130.055 18.2539C132.797 18.2539 134.543 19.8594 134.836 22.2383L132.82 22.6133C132.574 21.1133 131.566 20.1641 130.055 20.1641C128.297 20.1641 127.383 21.1602 127.383 22.3906C127.383 23.4453 127.945 23.9961 129.305 24.6758L132.258 26.1992C134.238 27.2188 135.27 28.5312 135.27 30.7812C135.27 33.3477 133.406 35.2695 130.031 35.2695ZM138.75 35H136.324L142.934 18.5234H145.348L151.957 35H149.543L147.914 30.8984H140.367L138.75 35ZM144.141 21.1016L140.953 29.0703H147.328L144.141 21.1016ZM161.051 35.375C156.141 35.375 152.613 31.8008 152.613 26.7617C152.613 21.7227 156.152 18.1484 161.051 18.1484C164.672 18.1484 167.578 20.0938 168.773 23.1289L166.594 23.7383C165.645 21.5586 163.559 20.2227 161.051 20.2227C157.477 20.2227 154.898 22.8828 154.898 26.7617C154.898 30.6406 157.477 33.2656 161.062 33.2656C164.414 33.2656 166.676 31.2383 166.781 28.625H160.945V26.8086H169.254C169.254 32.3516 165.961 35.375 161.051 35.375ZM181.43 35H172.195V18.5234H181.43V20.5156H174.422V25.4727H180.996V27.4531H174.422V33.0078H181.43V35Z"
        className="fill-neutral-12"
      />
    </svg>
    <Question className="text-subtle" size={20} weight="duotone" />
  </header>
)

// const resp = await sendToBackground({
//   name: "ping",
//   body: {
//     id: 123
//   }
// })
// console.log(resp)
function PopupPanel() {
  const videoId = useVideoId()

  return (
    <div className="h-full w-full border-t border-primary">
      <div className="flex flex-col p-6">
        <AppHeader />
        {videoId ? (
          <PlaylistGenerator videoId={videoId} />
        ) : (
          <>
            <SplashScreen />
          </>
        )}
      </div>
    </div>
  )
}

export default PopupPanel
