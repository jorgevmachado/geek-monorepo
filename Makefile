RUN:=yarn

#-------------------------------------------- FUNCTIONS ---------------------------------------------------------------#
define delete_dependencies
	@echo delete_dependencies $(1)
	rm -Rf ./$(1)/node_modules
endef

define delete_dependencies_build
	@echo delete_build $(1)
	rm -Rf ./$(1)/dist
endef

define build_dependencies
	@echo build_dependencies $(1)
	cd ./$(1) && $(RUN) build
endef
#------------------------------------------------- END ----------------------------------------------------------------#

#------------------------------------------------- CLEAN --------------------------------------------------------------#
clean-dependencies:
	rm -Rf ./node_modules
	$(call delete_dependencies,packages/business)
	$(call delete_dependencies,packages/services)
	$(call delete_dependencies,packages/ui)
	$(call delete_dependencies,packages/eslint-config)

clean-builds:
	$(call delete_dependencies_build,packages/business)
	$(call delete_dependencies_build,packages/services)
	$(call delete_dependencies_build,packages/typescrupt-config)
	$(call delete_dependencies_build,packages/ui)

clean-all: clean-dependencies clean-builds
#------------------------------------------------- END ----------------------------------------------------------------#

#------------------------------------------------- BUILD --------------------------------------------------------------#
build-dependencies:
	$(call build_dependencies,packages/services)
	$(call build_dependencies,packages/business)
#------------------------------------------------- END ----------------------------------------------------------------#

#------------------------------------------------- INSTALL ------------------------------------------------------------#
install:
	yarn
#------------------------------------------------- END ----------------------------------------------------------------#

setup:
	make clean-all
	make install
	make build-dependencies