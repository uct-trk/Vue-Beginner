import { expect } from 'chai'
import Vue from 'vue'
import Search from '@/components/Search.vue'

describe('Search.vue', () => {

    let vm = null

    beforeEach(() => {
        const container = document.createElement("div")
        const SearchComponent = Vue.extend(Search);
        vm = new SearchComponent();

        vm.$mount(container);
    })

    it("should be instantiated", () => {
        expect(vm.query).equal("");
        expect(vm.$el.firstChild.tagName).equal("INPUT");
        expect(vm.$el.lastChild.tagName).equal("BUTTON");
    });

    it("should emit event when button is clicked", () => {
        const spy = sinon.spy(vm, '$emit');
        vm.$el.lastChild.click();

        expect(spy.called).be.true;

        const [eventName, query] = spy.args[0];
        expect(eventName).equal("SearchRequested");
        expect(query).equal("");
    });

    it("should update query when input value changed", () => {

        const input = vm.$el.firstChild;
        input.value = "Hello";
        input.dispatchEvent(new Event("input"));

        expect(vm.query).equal("Hello");
    })
});
