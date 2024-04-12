

class BankBranch {
    constructor(branchInfo) {
      if (!BankBranch.instance) {
        this.branchInfo = branchInfo;
        BankBranch.instance = this;
      } else {
        return BankBranch.instance;
      }
    }
  
    getBranchInfo() {
      return this.branchInfo;
    }
  
    static getInstance() {
      return this.instance || new this();
    }
  }
  
  // Create instances of the BankBranch class
  const branchA = new BankBranch({
    name: 'Branch A',
    location: 'Waterfall Mall',
    manager: 'Phillip Bogopane'
  });
  
  const branchB = new BankBranch({
    name: 'Branch B',
    location: 'Waterfall Mall',
    manager: 'Phillip Bogopane'
  });
  
  // Verify that branchA and branchB are the same instance
  console.log(branchA === branchB); // true
  
  // Retrieve branch information
  console.log(branchA.getBranchInfo());
  console.log(branchB.getBranchInfo());
  
  // Access the singleton instance using the static method
  console.log(BankBranch.getInstance());