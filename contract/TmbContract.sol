pragma solidity ^0.4.18;

contract TmbContract {
    
    struct Member {
        string firstName;
        string lastName;
        address current;
    }
    
    struct Product {
        uint id;
        address owner;
        string name;
        uint price;
        uint total;
        string place;
        string province;
        string country;
    }
    
    Member[] public members;
    Product[] public products;

    uint[] public listProductId;
    
    mapping (uint => address) public memberToOwner;
    mapping (address => uint) ownerMemberToken;
    
    mapping (uint => address) productToOwner;
    mapping (string => uint) productNameToId;
    
    constructor() public {
        createMember("Storygu", "Teemo");
        setToken(1000);
    }
    
    function setProduct(string _name, uint _price, uint _total, string _place, string _province, string _country) public {
        uint id = products.push(Product(0, msg.sender, _name, _price, _total, _place, _province, _country)) - 1;
        productToOwner[id] = msg.sender;
        productNameToId[_name] = id;
    }
    
    function getAllProduct(string name) public view returns(uint[]){
        uint[] listId;
        for (uint i=0; i <products.length; i++) {
            //listId.push(products[i].);
        }
    }
    
    function createMember(string _firstName, string _lastName) public {
        uint id = members.push(Member(_firstName, _lastName, msg.sender)) - 1;
        memberToOwner[id] = msg.sender;
        ownerMemberToken[msg.sender] = 0;
    }
    
    function setToken(uint token) public {
        ownerMemberToken[msg.sender] = token;
    }
    
    function buyToken(uint token) public {
        address dealer = memberToOwner[0];
        ownerMemberToken[msg.sender] += token;
        ownerMemberToken[dealer] = getToken(dealer) - token;
    }
    
    function getToken(address _address) public view returns(uint){
        return ownerMemberToken[_address];
    }
    
}