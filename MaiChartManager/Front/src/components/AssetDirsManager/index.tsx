import { defineComponent, ref } from "vue";
import { NButton, NFlex, NList, NListItem, NModal, NScrollbar } from "naive-ui";
import { assetDirs } from "@/store/refs";
import AssetDirDisplay from "@/components/AssetDirsManager/AssetDirDisplay";
import CreateButton from "./CreateButton";

export default defineComponent({
  setup(props) {
    const show = ref(false);

    return () => <NButton secondary onClick={() => show.value = true}>
      资源目录管理

      <NModal
        preset="card"
        class="w-[min(70vw,80em)]"
        title="资源目录管理"
        v-model:show={show.value}
      >
        <NFlex vertical size="large">
          <NFlex>
            <CreateButton/>
          </NFlex>
          <NScrollbar class="h-80vh">
            <NList>
              {assetDirs.value.map(it => <NListItem>
                <AssetDirDisplay dir={it}/>
              </NListItem>)}
            </NList>
          </NScrollbar>
        </NFlex>
      </NModal>
    </NButton>;
  }
})