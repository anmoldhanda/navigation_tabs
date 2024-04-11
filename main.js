const all_navigationtab_btns = document.querySelectorAll(".navigationtab-btn");
all_navigationtab_btns.forEach((single_navigation_tab_btn) => {
  single_navigation_tab_btn.addEventListener("click", (e) => {
    // ====================================================== when clicked on the iterated tab btn then it will take the tab name from it's custom attribute's by using dataset.attributename & in our case is navigationstabs ======================================================
    const tab_btn_name = single_navigation_tab_btn.dataset.navigationtabs;
    // ====================================================== set the id of tab container the same as the attribute's value so that's why getting by id is tabname bcuz attrib='osname' id="osname" like this ======================================================
    const tab_container = document.getElementById(tab_btn_name);
    const alltabs_container = document.querySelectorAll(".tab-container");
    alltabs_container.forEach((single_tab_container) => {
      // ====================================================== iterated the alltabs and hide them all ======================================================
      single_tab_container.style.display = "none";
    });
    all_navigationtab_btns.forEach((single_navigation_tab_btn) => {
      // ====================================================== reiterated the all navigationstab btns then removed the active class indicating which tab is active ======================================================
      single_navigation_tab_btn.classList.remove("active-navigationtab-btn");
    });
    single_navigation_tab_btn.classList.add("active-navigationtab-btn");
    tab_container.style.display = "flex";
  });
  // ====================================================== clicked by default so one will be automatically shown ======================================================
  single_navigation_tab_btn.click();
});
