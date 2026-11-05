# AI usage log

Using AI never costs marks; a vague or missing log does.
Add a new section every week, before you tag. Did not use AI? Write "None" under Tool(s).

## Week 1
- Tool(s): -
- What I asked for: -
- What I kept, changed or rejected, and why:-
- One thing the AI got wrong and how I fixed it:-

## Week 2
- Tool(s): gemini
- What I asked for: list of menu
- What I kept, changed or rejected, and why: all list of the menu
- One thing the AI got wrong and how I fixed it: -

## Week 3
- Tool(s): Gemini, Claude
- What I asked for: I asked the AI to fix my App.jsx code because my menu area was showing up as a blank background when trying start the development server, the UI shows blank/white background, and asked why "Favourites only" shows no items even after I pressed the heart button on some items
- What I kept, changed or rejected, and why: My original state setup (cart, favourites, view), overall component structure, and the useEffect fetch logic with AbortController. but I changed selectedVendor.items to selectedVendor.menu because accessing .items returned undefined and left the screen blank, updated cartCount to use line.qty instead of item.quantity so the cart badge stopped showing NaN, fixed <ErrorMessage> to pass error directly so it wouldn't render an empty box, and reorganized the file to group all handler functions near the top. I also add import libraries from other components files. Then, I changed MenuItemCard.jsx to remove its own useState, so the heart now uses the isFavourite and onToggleFavourite props. I changed MenuList.jsx to pass favourites and onToggleFavourite down to each card, and to accept an emptyMessage prop so the empty favourites list shows a sensible message. The bug was that the heart state was still inside each card (my Week 2 code), so App's favourites array stayed empty and the filter had nothing to match.
- One thing the AI got wrong and how I fixed it: I used its suggestion drafts, but the naming i use its based on my own component name.

## Week 4
- Tool(s): Gemini
- What I asked for: how to move favourites into a context (or the cart context) and add a
/favourites page.
- What I kept, changed or rejected, and why: I moved the favourites array out of VendorPage and into CartProvider to store each favourite as { item, vendorId, vendorName } instead of only an item id so the new page can show the item details and which vendor it came from without fetching the vendor list again. I kept the toggle logic in the provider using a function updater so it always works from the latest favourites state, and exposed isFavourite, toggleFavourite, and removeFavourite. I changed MenuList to read favourites from context, and gave MenuItemCard a vendor prop so the favourites page can link back to the vendor. Lastly, I added the /favourites route and a header link with a count badge.
- One thing the AI got wrong and how I fixed it: It suggested storing only the item id in the favourites list. I realized it not necessary because the Favourites page wouldnt know the item names, prices, or which vendor they came from without making extra data requests. I fixed this by ignoring that part of Gemini code and rewriting it to save an object with the full item details and vendor info ({ item, vendorId, vendorName }) instead.
