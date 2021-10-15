const rewire = require("rewire")
const listItem = rewire("./listItem")
const ListItem = listItem.__get__("ListItem")
const mapStateToProps = listItem.__get__("mapStateToProps")
// @ponicode
describe("componentWillUpdate", () => {
    let inst

    beforeEach(() => {
        inst = new ListItem()
    })

    test("0", () => {
        let callFunction = () => {
            inst.componentWillUpdate()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("mapStateToProps", () => {
    test("0", () => {
        let callFunction = () => {
            mapStateToProps({ selectedLibraryId: "a85a8e6b-348b-4011-a1ec-1e78e9620782", id: "7289708e-b17a-477c-8a77-9ab575c4b4d8" }, { library: { selectedLibraryId: "7289708e-b17a-477c-8a77-9ab575c4b4d8", id: "7289708e-b17a-477c-8a77-9ab575c4b4d8" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            mapStateToProps({ selectedLibraryId: "a85a8e6b-348b-4011-a1ec-1e78e9620782", id: "a85a8e6b-348b-4011-a1ec-1e78e9620782" }, { library: { selectedLibraryId: "a85a8e6b-348b-4011-a1ec-1e78e9620782", id: "a85a8e6b-348b-4011-a1ec-1e78e9620782" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            mapStateToProps({ selectedLibraryId: "a85a8e6b-348b-4011-a1ec-1e78e9620782", id: "7289708e-b17a-477c-8a77-9ab575c4b4d8" }, { library: { selectedLibraryId: "a85a8e6b-348b-4011-a1ec-1e78e9620782", id: "03ea49f8-1d96-4cd0-b279-0684e3eec3a9" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            mapStateToProps({ selectedLibraryId: "a85a8e6b-348b-4011-a1ec-1e78e9620782", id: "a85a8e6b-348b-4011-a1ec-1e78e9620782" }, { library: { selectedLibraryId: "7289708e-b17a-477c-8a77-9ab575c4b4d8", id: "03ea49f8-1d96-4cd0-b279-0684e3eec3a9" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            mapStateToProps({ selectedLibraryId: "7289708e-b17a-477c-8a77-9ab575c4b4d8", id: "03ea49f8-1d96-4cd0-b279-0684e3eec3a9" }, { library: { selectedLibraryId: "a85a8e6b-348b-4011-a1ec-1e78e9620782", id: "7289708e-b17a-477c-8a77-9ab575c4b4d8" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            mapStateToProps(undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
