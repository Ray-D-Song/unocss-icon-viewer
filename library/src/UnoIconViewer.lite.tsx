import 'virtual:uno.css'
import { icons } from '@iconify-json/fe/index.js'
import { For } from '@builder.io/mitosis'

export default function UnoIconViewer(props: { icon: string, setIcon: (icon: string) => void }) {

  return (
    <div class="dark:bg-[#181818] bg-[#ffffff] w-full h-40 rounded-lg overflow-y-scroll">
       <div class="grid grid-cols-6 gap-4">
         <For each={Object.keys(icons.icons).slice(0, 40)}>
          {
            (item) => (
              <div key={item} onClick={() => props.setIcon(item)} class="flex flex-col items-center justify-center cursor-pointer p-4px dark:hover:bg-[#2A2A2A] hover:bg-[#EBEAEA]">
                <div class={`mb-2px i-${icons.prefix}-${item}`} />
                <div class="text-xs text-center">{ item }</div>
              </div>
            )
          }
          </For>
        </div>
      </div>
  )
}