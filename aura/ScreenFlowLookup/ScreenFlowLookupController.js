({
    handleChange : function(component, event) {
        component.set("v.selectedRecordId", event.getParams("fields").value);
    }
})