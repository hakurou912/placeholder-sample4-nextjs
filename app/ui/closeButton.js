'use client'
import { useRouter } from 'next/navigation'

export default function CloseButton({ style }){
    const router = useRouter()
    return(
        <button type="button" className={style} onClick={() => router.back()} data-bs-dismiss="modal">
            {style === "btn-close" ? null : <div>Close</div>}
        </button>   
    )
}
/* モーダル起動によりページが遷移されますが、router.back()により元のURLに戻ります。(画面リロードなし) */