
import DropDownMenu from './DropDownMenu'

export default function FlashStudy({collectionList}) {

    return (
        <>
        <DropDownMenu collectionList={collectionList} name='Select Collection'></DropDownMenu>
        </>
    )
}