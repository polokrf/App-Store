const getDataLocal = () => {
  const getDataItem = localStorage.getItem('app')
  if (getDataItem) {
    const data = JSON.parse(getDataItem)
    return data
  } else {
    return []
  }
}

const setDataItems = (id) => {
  const items = getDataLocal()
  if (items.includes(id)) {
    return
  } else {
    items.push(id)
    const dataItems = JSON.stringify(items);
    localStorage.setItem('app',dataItems)
  }
}

export{getDataLocal,setDataItems}