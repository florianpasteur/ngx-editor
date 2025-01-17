import { EditorState, Transaction } from 'prosemirror-state';
import { NodeType } from 'prosemirror-model';
import { wrapInList, liftListItem } from 'prosemirror-schema-list';

import { isNodeActive } from 'ngx-editor/helpers';

export const toggleList = (type: NodeType, itemType: NodeType) => {
  return (state: EditorState, dispatch: (tr: Transaction) => void) => {
    const isActive = isNodeActive(state, type);

    if (isActive) {
      return liftListItem(itemType)(state, dispatch);
    }

    return wrapInList(type)(state, dispatch);
  };
};
