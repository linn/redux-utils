type ItemType = {
    item: string;
    actionType: string;
    uri: string;
};

export default function createItemType(item: string, actionType: string, uri: string): ItemType {
    return { item, actionType, uri };
}
