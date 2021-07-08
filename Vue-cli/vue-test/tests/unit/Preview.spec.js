import { expect } from 'chai'
import Vue from 'vue'
import Preview from '@/components/Preview.vue'

describe('Preview.vue', () => {
    it("should list gifs", () => {

        const container = document.createElement("div")
        const PreviewComponent = Vue.extend(Preview);
        const vm = new PreviewComponent({
            propsData: {
                gifs: [
                    { images: { fixed_height: { url: "foo.gif" } } },
                    { images: { fixed_height: { url: "bar.gif" } } }
                ]
            }
        })

        vm.$mount(container);

        expect(vm.gifs.length).equal(2);
        expect(vm.$el.querySelectorAll("li").length).equal(2)
        expect(vm.$el.querySelectorAll("li").firstChild.tagName).equal('IMG')
        expect(vm.$el.querySelectorAll("li").firstChild.src).contain('foo.gif')
    })
})
